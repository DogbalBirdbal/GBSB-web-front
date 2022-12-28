package com.dogbalbirdbal.controller;


import com.dogbalbirdbal.database.vo.UserInfo;
import com.fasterxml.jackson.core.JsonParser;
import org.springframework.boot.configurationprocessor.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.sql.*;
import java.util.HashMap;
import java.util.Properties;
import java.util.Scanner;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import java.util.ArrayList;

@RestController
public class MainController {

    String url = "jdbc:postgresql://localhost:5432/GBSB_JUN";
    String user = "postgres"; //
    String password1 = null; // have to set
    
    @PostMapping("api/login/")
    public String login(@RequestBody UserInfo userInfo)
    {
        HashMap<String, String> stringStringHashMap = new HashMap<>();
        stringStringHashMap.put("Result", "fail");

        try{
            Connection connect = DriverManager.getConnection(url, user, password1);
            String sql = "select uid, name\n" +
                    "from MyUser\n" +                   // table 선택
                    "where uid = ? and password = ?";   // 조건문 uid랑 password 입력받은 값이 일치하는지
            PreparedStatement p = connect.prepareStatement(sql); // 질의문을 작성할 것을 만든다.
            p.setString(1, userInfo.getId());       // 이게 첫번째 물음표로 이동한다.
            p.setString(2, userInfo.getPassword()); // 이게 두번째 물음표로 이동한다.

            ResultSet resultSet = p.executeQuery();             // 질의문을 실행한다.

            boolean existData = false;

            while ( resultSet.next() ) {
                stringStringHashMap.put("id", resultSet.getString(1));
                stringStringHashMap.put("name", resultSet.getString(2));
                existData = true;
            }

            if ( existData ) {
                stringStringHashMap.put("Result", "Success");
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        return "id : " + userInfo.getId() + ", password " + userInfo.getPassword();
    }


    @PostMapping("api/signup/")
    public String signup(@RequestBody UserInfo userInfo){

        try{
            Connection connect = DriverManager.getConnection(url, user, password1);
            String sql = "insert into MyUser(uid, name, password, email) values(?, ?, ?, ?)";
            PreparedStatement p = connect.prepareStatement(sql);
            p.setString(1, userInfo.getId());
            p.setString(2, userInfo.getName());
            p.setString(3, userInfo.getPassword());
            p.setString(4, userInfo.getEmail());
            p.executeUpdate();

            System.out.println("ID: " + userInfo.getId() + " NAME: " + userInfo.getName() + "PW: " + userInfo.getPassword() + "EMAIL: " + userInfo.getEmail());
            return "id : " + userInfo.getId() + ", name : " + userInfo.getName() + ", email : " + userInfo.getEmail() + ", password " + userInfo.getPassword();

        } catch (SQLException ex) {
            ex.printStackTrace();
            System.out.println("ID 중복");
        }
        return null; // 이 return value를 front에서 받았을 때, 다른 메세지를 출력할 수 있도록 진행해야함. ex) 이미 사용중인 아이디입니다.
    }


    @GetMapping("/api/crawlingfood/{location}")
    public String crawlingController(@PathVariable("location") String location) {
        ArrayList<CrawlingData> foods = new ArrayList<>();
        ArrayList<String> StringName = new ArrayList<>();
        ArrayList<String> PicURL = new ArrayList<>();
        String fullURL = "https://www.siksinhot.com/search?keywords=" + location;
        try {
            Document doc = Jsoup.connect(fullURL).get();
            Elements contents = doc.select("ul.localFood_list li a img:nth-child(1)");

            for (Element t : contents) {
                String temp = t.attr("alt");
                String[] temp2 = temp.split(" ");
                StringName.add(temp2[0]);

                PicURL.add(t.attr("src"));
            }

            for (int a = 0; a < 10; a++) {
                CrawlingData food = new CrawlingData(StringName.get(a), PicURL.get(a));
                foods.add(food);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        // String result = foods.toString(); 크롤링 된 음식점 목록들
        return String.format(GetRandomSource(foods).toString());
    }

    @GetMapping("/api/crawlinghotel/{data}")
    public String crawlingController2(@PathVariable("data") String data) {
        //장소_2022-12-09_2022-12-10 방식으로 data 작성
        ArrayList<CrawlingData> Hotels = new ArrayList<>();
        ArrayList<String> StringName = new ArrayList<>();
        ArrayList<String> PicURL = new ArrayList<>();
        ArrayList<String> latitudes = new ArrayList<>();
        ArrayList<String> longitudes = new ArrayList<>();
        String[] urlSplit = data.split("_");

        String fullURL = "https://www.goodchoice.kr/product/result?sel_date=" + urlSplit[1] + "&sel_date2=" + urlSplit[2] + "&keyword=" + urlSplit[0];
        try {
            Document doc = Jsoup.connect(fullURL).timeout(0).get();
            Elements text_contents = doc.select("div.name strong");
            Elements image_contents = doc.select("p[class=pic] img");
            Elements location_contents = doc.select("div[id=poduct_list_area] ul a");

            for (Element t : text_contents) {
                String temp = t.text();
                if (temp.contains("★당일특가★")) {
                    temp = temp.replace("★당일특가★", "");
                }
                StringName.add(temp);
            }

            for (Element i : image_contents) {
                PicURL.add("https:" + i.attr("data-original"));
            }

            for (Element k : location_contents) {
                latitudes.add(k.attr("data-alat"));
                longitudes.add(k.attr("data-alng"));
            }

            for (int a = 0; a < 10; a++) {
                CrawlingData hotel = new CrawlingHotel(StringName.get(a), PicURL.get(a), latitudes.get(a), longitudes.get(a));
                Hotels.add(hotel);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        // String result = Hotels.toString(); 크롤링 된 호텔 목록
        return String.format(GetRandomSource(Hotels).toString());
    }

    public CrawlingData GetRandomSource(ArrayList<CrawlingData> list) {
        int a, flag = 0;
        int[] WeightValueArray = {50, 30, 20, 10, 8, 6, 4, 3, 2, 1};
        for (a = 0; a < 10; a++) {
            WeightValueArray[a] += (Math.random() * 10 + 1);
        }
        while (true) {
            for (a = 0; a < list.size(); a++) {
                flag += WeightValueArray[a];
                if (flag > 1000) {
                    return list.get(a);
                }
            }
        }
    }
}

class CrawlingData {
    private final String name;
    private final String pic_url;

    CrawlingData(String name, String pic_url) {
        this.name = name;
        this.pic_url = pic_url;
    }
    public String toString() {
        return "NAME : " + this.name + ", URL : " + this.pic_url;
    }
}

class CrawlingHotel extends CrawlingData {
    private final String latitudes;
    private final String longitudes;

    CrawlingHotel(String name, String pic_url, String latitudes, String longitudes) {
        super(name, pic_url);
        this.latitudes = latitudes;
        this.longitudes = longitudes;
    }
    public String toString() {
        return super.toString() + ", LATITUDES : " + this.latitudes + ", LONGITUDES : " + this.longitudes;
    }
}
