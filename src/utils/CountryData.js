import { pinyin } from "pinyin-pro";

//Images

//America
import canadaImage from "./images/美洲/加拿大.png";
import cubaImage from "./images/美洲/古巴.png";
import colombiaImage from "./images/美洲/哥伦比亚.png";
import mexicoImage from "./images/美洲/墨西哥.png";
import venezuelaImage from "./images/美洲/委内瑞拉.png";
import panamaImage from "./images/美洲/巴拿马.png";
import brazilImage from "./images/美洲/巴西.png";
import chileImage from "./images/美洲/智利.png";
import peruImage from "./images/美洲/秘鲁.png";
import usaImage from "./images/美洲/美国.png";
import argentinaImage from "./images/美洲/阿根廷.png";

//Asia
import uzbekistanImage from "./images/亚洲/乌兹别克.png";
import israelImage from "./images/亚洲/以色列.png";
import iraqImage from "./images/亚洲/伊拉克.png";
import iranImage from "./images/亚洲/伊朗.png";
import indiaImage from "./images/亚洲/印度.png";
import indonesiaImage from "./images/亚洲/印度尼西亚.png";
import kyrgyzstanImage from "./images/亚洲/吉尔吉斯斯坦.png";
import kazakhstanImage from "./images/亚洲/哈萨克斯坦.png";
import turkmenistanImage from "./images/亚洲/土库曼斯坦.png";
import turkeyImage from "./images/亚洲/土耳其.png";
import tajikistanImage from "./images/亚洲/塔吉克斯坦.png";
import bangladeshImage from "./images/亚洲/孟加拉.png";
import nepalImage from "./images/亚洲/尼泊尔.png";
import pakistanImage from "./images/亚洲/巴基斯坦.png";
import bahrainImage from "./images/亚洲/巴林.png";
import bruneiImage from "./images/亚洲/文莱.png";
import srilankaImage from "./images/亚洲/斯里兰卡.png";
import singaporeImage from "./images/亚洲/新加坡.png";
import japanImage from "./images/亚洲/日本.png";
import cambodiaImage from "./images/亚洲/柬埔寨.png";
import georgiaImage from "./images/亚洲/格鲁吉亚.png";
import saudiArabiaImage from "./images/亚洲/沙特阿拉伯.png";
import thailandImage from "./images/亚洲/泰国.png";
import kuwaitImage from "./images/亚洲/科威特.png";
import jordanImage from "./images/亚洲/约旦.png";
import myanmarImage from "./images/亚洲/缅甸.png";
import laosImage from "./images/亚洲/老挝.png";
import philippinesImage from "./images/亚洲/菲律宾.png";
import mongoliaImage from "./images/亚洲/蒙古.png";
import vietnamImage from "./images/亚洲/越南.png";
import dubaiImage from "./images/亚洲/迪拜.png";
import azerbaijanImage from "./images/亚洲/阿塞拜疆.png";
import omanImage from "./images/亚洲/阿曼.png";
import koreaImage from "./images/亚洲/韩国.png";
import malaysiaImage from "./images/亚洲/马来西亚.png";

//Oceania
import newzealandImage from "./images/大洋洲/新西兰.png";
import australiaImage from "./images/大洋洲/澳大利亚.png";

//Europe
import denmarkImage from "./images/欧洲/丹麦.png";
import ukraineImage from "./images/欧洲/乌克兰.png";
import russiaImage from "./images/欧洲/俄罗斯.png";
import croatiaImage from "./images/欧洲/克罗地亚.png";
import icelandImage from "./images/欧洲/冰岛.png";
import liechtensteinImage from "./images/欧洲/列支敦士登.png";
import hungaryImage from "./images/欧洲/匈牙利.png";
import luxembourgImage from "./images/欧洲/卢森堡.png";
import austriaImage from "./images/欧洲/奥地利.png";
import greeceImage from "./images/欧洲/希腊.png";
import germanyImage from "./images/欧洲/德国.png";
import italyImage from "./images/欧洲/意大利.png";
import latviaImage from "./images/欧洲/拉脱维亚.png";
import norwayImage from "./images/欧洲/挪威.png";
import czechImage from "./images/欧洲/捷克.png";
import slovakiaImage from "./images/欧洲/斯洛伐克.png";
import sloveniaImage from "./images/欧洲/斯洛文尼亚.png";
import belgiumImage from "./images/欧洲/比利时.png";
import franceImage from "./images/欧洲/法国.png";
import polandImage from "./images/欧洲/波兰.png";
import irelandImage from "./images/欧洲/爱尔兰.png";
import estoniaImage from "./images/欧洲/爱沙尼亚.png";
import swedenImage from "./images/欧洲/瑞典.png";
import switzerlandImage from "./images/欧洲/瑞士.png";
import lithuaniaImage from "./images/欧洲/立陶宛.png";
import romaniaImage from "./images/欧洲/罗马尼亚.png";
import finlandImage from "./images/欧洲/芬兰.png";
import ukImage from "./images/欧洲/英国.png";
import netherlandsImage from "./images/欧洲/荷兰.png";
import portugalImage from "./images/欧洲/葡萄牙.png";
import spainImage from "./images/欧洲/西班牙.png";
import maltaImage from "./images/欧洲/马耳他.png";

//Africa
import ugandaImage from "./images/非洲/乌干达.png";
import chadImage from "./images/非洲/乍得.png";
import guineaImage from "./images/非洲/几内亚.png";
import ghanaImage from "./images/非洲/加纳.png";
import southAfricaImage from "./images/非洲/南非.png";
import botswanaImage from "./images/非洲/博茨瓦纳.png";
import cameroonImage from "./images/非洲/喀麦隆.png";
import tanzaniaImage from "./images/非洲/坦桑尼亚.png";
import egyptImage from "./images/非洲/埃及.png";
import ethiopiaImage from "./images/非洲/埃塞俄比亚.png";
import togoImage from "./images/非洲/多哥.png";
import angolaImage from "./images/非洲/安哥拉.png";
import nigeriaImage from "./images/非洲/尼日利亚.png";
import namibiaImage from "./images/非洲/纳米比亚.png";
import kenyaImage from "./images/非洲/肯尼亚.png";
import mozambiqueImage from "./images/非洲/莫桑比克.png";
import zambiaImage from "./images/非洲/赞比亚.png";
import algeriaImage from "./images/非洲/阿尔及利亚.png";
import madagascarImage from "./images/非洲/马达加斯加.png";
import maliImage from "./images/非洲/马里.png";

let Countries_Data = new Map();
Countries_Data.set("加拿大", { image: canadaImage, code: "ca" });
Countries_Data.set("古巴", { image: cubaImage, code: "cu" });
Countries_Data.set("哥伦比亚", { image: colombiaImage, code: "co" });
Countries_Data.set("墨西哥", { image: mexicoImage, code: "mx" });
Countries_Data.set("委内瑞拉", { image: venezuelaImage, code: "ve" });
Countries_Data.set("巴拿马", { image: panamaImage, code: "pa" });
Countries_Data.set("巴西", { image: brazilImage, code: "br" });
Countries_Data.set("智利", { image: chileImage, code: "cl" });
Countries_Data.set("秘鲁", { image: peruImage, code: "pe" });
Countries_Data.set("美国", { image: usaImage, code: "us" });
Countries_Data.set("阿根廷", { image: argentinaImage, code: "ar" });
Countries_Data.set("乌兹别克", { image: uzbekistanImage, code: "uz" });
Countries_Data.set("以色列", { image: israelImage, code: "il" });
Countries_Data.set("伊拉克", { image: iraqImage, code: "iq" });
Countries_Data.set("伊朗", { image: iranImage, code: "ir" });
Countries_Data.set("印度", { image: indiaImage, code: "in" });
Countries_Data.set("印度尼西亚", { image: indonesiaImage, code: "id" });
Countries_Data.set("吉尔吉斯斯坦", { image: kyrgyzstanImage, code: "kg" });
Countries_Data.set("哈萨克斯坦", { image: kazakhstanImage, code: "kz" });
Countries_Data.set("土库曼斯坦", { image: turkmenistanImage, code: "tm" });
Countries_Data.set("土耳其", { image: turkeyImage, code: "tr" });
Countries_Data.set("塔吉克斯坦", { image: tajikistanImage, code: "tj" });
Countries_Data.set("孟加拉", { image: bangladeshImage, code: "bd" });
Countries_Data.set("尼泊尔", { image: nepalImage, code: "np" });
Countries_Data.set("巴基斯坦", { image: pakistanImage, code: "pk" });
Countries_Data.set("巴林", { image: bahrainImage, code: "bh" });
Countries_Data.set("文莱", { image: bruneiImage, code: "bn" });
Countries_Data.set("斯里兰卡", { image: srilankaImage, code: "lk" });
Countries_Data.set("新加坡", { image: singaporeImage, code: "sg" });
Countries_Data.set("日本", { image: japanImage, code: "jp" });
Countries_Data.set("柬埔寨", { image: cambodiaImage, code: "kh" });
Countries_Data.set("格鲁吉亚", { image: georgiaImage, code: "ge" });
Countries_Data.set("沙特阿拉伯", { image: saudiArabiaImage, code: "sa" });
Countries_Data.set("泰国", { image: thailandImage, code: "th" });
Countries_Data.set("科威特", { image: kuwaitImage, code: "kw" });
Countries_Data.set("约旦", { image: jordanImage, code: "jo" });
Countries_Data.set("缅甸", { image: myanmarImage, code: "mm" });
Countries_Data.set("老挝", { image: laosImage, code: "la" });
Countries_Data.set("菲律宾", { image: philippinesImage, code: "ph" });
Countries_Data.set("蒙古", { image: mongoliaImage, code: "mn" });
Countries_Data.set("越南", { image: vietnamImage, code: "vn" });
Countries_Data.set("迪拜", { image: dubaiImage, code: "ae" }); // 迪拜实际上是阿联酋的一个城市，这里使用阿联酋的代码
Countries_Data.set("阿塞拜疆", { image: azerbaijanImage, code: "az" });
Countries_Data.set("阿曼", { image: omanImage, code: "om" });
Countries_Data.set("韩国", { image: koreaImage, code: "kr" });
Countries_Data.set("马来西亚", { image: malaysiaImage, code: "my" });
Countries_Data.set("新西兰", { image: newzealandImage, code: "nz" });
Countries_Data.set("澳大利亚", { image: australiaImage, code: "au" });
Countries_Data.set("丹麦", { image: denmarkImage, code: "dk" });
Countries_Data.set("乌克兰", { image: ukraineImage, code: "ua" });
Countries_Data.set("俄罗斯", { image: russiaImage, code: "ru" });
Countries_Data.set("克罗地亚", { image: croatiaImage, code: "hr" });
Countries_Data.set("冰岛", { image: icelandImage, code: "is" });
Countries_Data.set("列支敦士登", { image: liechtensteinImage, code: "li" });
Countries_Data.set("匈牙利", { image: hungaryImage, code: "hu" });
Countries_Data.set("卢森堡", { image: luxembourgImage, code: "lu" });
Countries_Data.set("奥地利", { image: austriaImage, code: "at" });
Countries_Data.set("希腊", { image: greeceImage, code: "gr" });
Countries_Data.set("德国", { image: germanyImage, code: "de" });
Countries_Data.set("意大利", { image: italyImage, code: "it" });
Countries_Data.set("拉脱维亚", { image: latviaImage, code: "lv" });
Countries_Data.set("挪威", { image: norwayImage, code: "no" });
Countries_Data.set("捷克", { image: czechImage, code: "cz" });
Countries_Data.set("斯洛伐克", { image: slovakiaImage, code: "sk" });
Countries_Data.set("斯洛文尼亚", { image: sloveniaImage, code: "si" });
Countries_Data.set("比利时", { image: belgiumImage, code: "be" });
Countries_Data.set("法国", { image: franceImage, code: "fr" });
Countries_Data.set("波兰", { image: polandImage, code: "pl" });
Countries_Data.set("爱尔兰", { image: irelandImage, code: "ie" });
Countries_Data.set("爱沙尼亚", { image: estoniaImage, code: "ee" });
Countries_Data.set("瑞典", { image: swedenImage, code: "se" });
Countries_Data.set("瑞士", { image: switzerlandImage, code: "ch" });
Countries_Data.set("立陶宛", { image: lithuaniaImage, code: "lt" });
Countries_Data.set("罗马尼亚", { image: romaniaImage, code: "ro" });
Countries_Data.set("芬兰", { image: finlandImage, code: "fi" });
Countries_Data.set("英国", { image: ukImage, code: "gb" });
Countries_Data.set("荷兰", { image: netherlandsImage, code: "nl" });
Countries_Data.set("葡萄牙", { image: portugalImage, code: "pt" });
Countries_Data.set("西班牙", { image: spainImage, code: "es" });
Countries_Data.set("马耳他", { image: maltaImage, code: "mt" });
Countries_Data.set("乌干达", { image: ugandaImage, code: "ug" });
Countries_Data.set("乍得", { image: chadImage, code: "td" });
Countries_Data.set("几内亚", { image: guineaImage, code: "gn" });
Countries_Data.set("加纳", { image: ghanaImage, code: "gh" });
Countries_Data.set("南非", { image: southAfricaImage, code: "za" });
Countries_Data.set("博茨瓦纳", { image: botswanaImage, code: "bw" });
Countries_Data.set("喀麦隆", { image: cameroonImage, code: "cm" });
Countries_Data.set("坦桑尼亚", { image: tanzaniaImage, code: "tz" });
Countries_Data.set("埃及", { image: egyptImage, code: "eg" });
Countries_Data.set("埃塞俄比亚", { image: ethiopiaImage, code: "et" });
Countries_Data.set("多哥", { image: togoImage, code: "tg" });
Countries_Data.set("安哥拉", { image: angolaImage, code: "ao" });
Countries_Data.set("尼日利亚", { image: nigeriaImage, code: "ng" });
Countries_Data.set("纳米比亚", { image: namibiaImage, code: "na" });
Countries_Data.set("肯尼亚", { image: kenyaImage, code: "ke" });
Countries_Data.set("莫桑比克", { image: mozambiqueImage, code: "mz" });
Countries_Data.set("赞比亚", { image: zambiaImage, code: "zm" });
Countries_Data.set("阿尔及利亚", { image: algeriaImage, code: "dz" });
Countries_Data.set("马达加斯加", { image: madagascarImage, code: "mg" });
Countries_Data.set("马里", { image: maliImage, code: "ml" });

// All Countries
export const countries = [
  "乌兹别克",
  "以色列",
  "伊拉克",
  "伊朗",
  "印度",
  "印度尼西亚",
  "吉尔吉斯斯坦",
  "哈萨克斯坦",
  "土库曼斯坦",
  "土耳其",
  "塔吉克斯坦",
  "孟加拉",
  "尼泊尔",
  "巴基斯坦",
  "巴林",
  "文莱",
  "斯里兰卡",
  "新加坡",
  "日本",
  "柬埔寨",
  "格鲁吉亚",
  "沙特阿拉伯",
  "泰国",
  "科威特",
  "约旦",
  "缅甸",
  "老挝",
  "菲律宾",
  "蒙古",
  "越南",
  "迪拜",
  "阿塞拜疆",
  "阿曼",
  "韩国",
  "马来西亚",
  "加拿大",
  "古巴",
  "哥伦比亚",
  "墨西哥",
  "委内瑞拉",
  "巴拿马",
  "巴西",
  "智利",
  "秘鲁",
  "美国",
  "阿根廷",
  "新西兰",
  "澳大利亚",
  "丹麦",
  "乌克兰",
  "俄罗斯",
  "克罗地亚",
  "冰岛",
  "列支敦士登",
  "匈牙利",
  "卢森堡",
  "奥地利",
  "希腊",
  "德国",
  "意大利",
  "拉脱维亚",
  "挪威",
  "捷克",
  "斯洛伐克",
  "斯洛文尼亚",
  "比利时",
  "法国",
  "波兰",
  "爱尔兰",
  "爱沙尼亚",
  "瑞典",
  "瑞士",
  "立陶宛",
  "罗马尼亚",
  "芬兰",
  "英国",
  "荷兰",
  "葡萄牙",
  "西班牙",
  "马耳他",
  "乌干达",
  "乍得",
  "几内亚",
  "加纳",
  "南非",
  "博茨瓦纳",
  "喀麦隆",
  "坦桑尼亚",
  "埃及",
  "埃塞俄比亚",
  "多哥",
  "安哥拉",
  "尼日利亚",
  "纳米比亚",
  "肯尼亚",
  "莫桑比克",
  "赞比亚",
  "阿尔及利亚",
  "马达加斯加",
  "马里",
];
export const HotCountries = [
  "美国",
  "韩国",
  "日本",
  "澳大利亚",
  "法国",
  "德国",
  "马来西亚",
  "越南",
  "泰国",
  "新加坡",
  "俄罗斯",
  "新西兰",
  "沙特阿拉伯",
  "英国",
  "加拿大",
  "意大利",
  "西班牙",
  "柬埔寨",
  "缅甸",
  "老挝",
  "巴基斯坦",
  "瑞士",
  "土耳其",
  "迪拜",
  "孟加拉",
  "希腊",
  "荷兰",
  "瑞典",
  "葡萄牙",
  "冰岛",
];
export const AsiaCountries = [
  "乌兹别克",
  "以色列",
  "伊拉克",
  "伊朗",
  "印度",
  "印度尼西亚",
  "吉尔吉斯斯坦",
  "哈萨克斯坦",
  "土库曼斯坦",
  "土耳其",
  "塔吉克斯坦",
  "孟加拉",
  "尼泊尔",
  "巴基斯坦",
  "巴林",
  "文莱",
  "斯里兰卡",
  "新加坡",
  "日本",
  "柬埔寨",
  "格鲁吉亚",
  "沙特阿拉伯",
  "泰国",
  "科威特",
  "约旦",
  "缅甸",
  "老挝",
  "菲律宾",
  "蒙古",
  "越南",
  "迪拜",
  "阿塞拜疆",
  "阿曼",
  "韩国",
  "马来西亚",
];
export const AmericaCountries = [
  "加拿大",
  "古巴",
  "哥伦比亚",
  "墨西哥",
  "委内瑞拉",
  "巴拿马",
  "巴西",
  "智利",
  "秘鲁",
  "美国",
  "阿根廷",
];
export const OceaniaCountries = ["新西兰", "澳大利亚"];
export const EuropeCountries = [
  "丹麦",
  "乌克兰",
  "俄罗斯",
  "克罗地亚",
  "冰岛",
  "列支敦士登",
  "匈牙利",
  "卢森堡",
  "奥地利",
  "希腊",
  "德国",
  "意大利",
  "拉脱维亚",
  "挪威",
  "捷克",
  "斯洛伐克",
  "斯洛文尼亚",
  "比利时",
  "法国",
  "波兰",
  "爱尔兰",
  "爱沙尼亚",
  "瑞典",
  "瑞士",
  "立陶宛",
  "罗马尼亚",
  "芬兰",
  "英国",
  "荷兰",
  "葡萄牙",
  "西班牙",
  "马耳他",
];
export const AfricaCountries = [
  "乌干达",
  "乍得",
  "几内亚",
  "加纳",
  "南非",
  "博茨瓦纳",
  "喀麦隆",
  "坦桑尼亚",
  "埃及",
  "埃塞俄比亚",
  "多哥",
  "安哥拉",
  "尼日利亚",
  "纳米比亚",
  "肯尼亚",
  "莫桑比克",
  "赞比亚",
  "阿尔及利亚",
  "马达加斯加",
  "马里",
];

// 根据国家名字返回国家图片
export const getCountryImage = (country) => {
  if (Countries_Data.has(country)) {
    return Countries_Data.get(country).image;
  }
  return null;
};

// 根据国家名字返回国家代码
export const getCountryCode = (country) => {
  if (Countries_Data.has(country)) {
    return Countries_Data.get(country).code;
  }
  //如果没有找到，返回null
  return null;
};

// 根据国家代码返回国家名字
export const getCountryName = (code) => {
  for (let [key, value] of Countries_Data) {
    if (value.code === code) {
      return key;
    }
  }
  //如果没有找到，返回null
  return null;
};

// 根据开始字母返回国家列表
export function getCountriesByLetter(letter) {
  return countries.filter((country) => {
    const pinyinArray = pinyin(country.charAt(0), { toneType: "none" });
    return pinyinArray[0] && pinyinArray[0].startsWith(letter.toLowerCase());
  });
}

// 根据国家名称（全名或部分）返回国家列表
export function getCountriesByName(name) {
  return countries.filter((country) => country.startsWith(name));
}
