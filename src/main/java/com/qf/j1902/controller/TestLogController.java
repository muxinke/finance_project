package com.qf.j1902.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Created by Administrator on 2019/7/17.
 */
@Controller
public class TestLogController {
    public static final Logger LOGGER = LogManager.getLogger(TestLogController.class);
    @GetMapping("test")
    public String test(){
        LOGGER.info("first test log");
        return "index";
    }
    @GetMapping("caogao")
    public String caogao(){
        return "caogao";
    }
    @GetMapping("biaoge")
    public String biaoge(){

        return "biaoge";
    }
}
