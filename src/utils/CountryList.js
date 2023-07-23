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

let CountryURL = new Map();

CountryURL.set("加拿大", canadaImage);
CountryURL.set("古巴", cubaImage);
CountryURL.set("哥伦比亚", colombiaImage);
CountryURL.set("墨西哥", mexicoImage);
CountryURL.set("委内瑞拉", venezuelaImage);
CountryURL.set("巴拿马", panamaImage);
CountryURL.set("巴西", brazilImage);
CountryURL.set("智利", chileImage);
CountryURL.set("秘鲁", peruImage);
CountryURL.set("美国", usaImage);
CountryURL.set("阿根廷", argentinaImage);
CountryURL.set("乌兹别克", uzbekistanImage);
CountryURL.set("以色列", israelImage);
CountryURL.set("伊拉克", iraqImage);
CountryURL.set("伊朗", iranImage);
CountryURL.set("印度", indiaImage);
CountryURL.set("印度尼西亚", indonesiaImage);
CountryURL.set("吉尔吉斯斯坦", kyrgyzstanImage);
CountryURL.set("哈萨克斯坦", kazakhstanImage);
CountryURL.set("土库曼斯坦", turkmenistanImage);
CountryURL.set("土耳其", turkeyImage);
CountryURL.set("塔吉克斯坦", tajikistanImage);
CountryURL.set("孟加拉", bangladeshImage);
CountryURL.set("尼泊尔", nepalImage);
CountryURL.set("巴基斯坦", pakistanImage);
CountryURL.set("巴林", bahrainImage);
CountryURL.set("文莱", bruneiImage);
CountryURL.set("斯里兰卡", srilankaImage);
CountryURL.set("新加坡", singaporeImage);
CountryURL.set("日本", japanImage);
CountryURL.set("柬埔寨", cambodiaImage);
CountryURL.set("格鲁吉亚", georgiaImage);
CountryURL.set("沙特阿拉伯", saudiArabiaImage);
CountryURL.set("泰国", thailandImage);
CountryURL.set("科威特", kuwaitImage);
CountryURL.set("约旦", jordanImage);
CountryURL.set("缅甸", myanmarImage);
CountryURL.set("老挝", laosImage);
CountryURL.set("菲律宾", philippinesImage);
CountryURL.set("蒙古", mongoliaImage);
CountryURL.set("越南", vietnamImage);
CountryURL.set("迪拜", dubaiImage);
CountryURL.set("阿塞拜疆", azerbaijanImage);
CountryURL.set("阿曼", omanImage);
CountryURL.set("韩国", koreaImage);
CountryURL.set("马来西亚", malaysiaImage);
CountryURL.set("新西兰", newzealandImage);
CountryURL.set("澳大利亚", australiaImage);
CountryURL.set("丹麦", denmarkImage);
CountryURL.set("乌克兰", ukraineImage);
CountryURL.set("俄罗斯", russiaImage);
CountryURL.set("克罗地亚", croatiaImage);
CountryURL.set("冰岛", icelandImage);
CountryURL.set("列支敦士登", liechtensteinImage);
CountryURL.set("匈牙利", hungaryImage);
CountryURL.set("卢森堡", luxembourgImage);
CountryURL.set("奥地利", austriaImage);
CountryURL.set("希腊", greeceImage);
CountryURL.set("德国", germanyImage);
CountryURL.set("意大利", italyImage);
CountryURL.set("拉脱维亚", latviaImage);
CountryURL.set("挪威", norwayImage);
CountryURL.set("捷克", czechImage);
CountryURL.set("斯洛伐克", slovakiaImage);
CountryURL.set("斯洛文尼亚", sloveniaImage);
CountryURL.set("比利时", belgiumImage);
CountryURL.set("法国", franceImage);
CountryURL.set("波兰", polandImage);
CountryURL.set("爱尔兰", irelandImage);
CountryURL.set("爱沙尼亚", estoniaImage);
CountryURL.set("瑞典", swedenImage);
CountryURL.set("瑞士", switzerlandImage);
CountryURL.set("立陶宛", lithuaniaImage);
CountryURL.set("罗马尼亚", romaniaImage);
CountryURL.set("芬兰", finlandImage);
CountryURL.set("英国", ukImage);
CountryURL.set("荷兰", netherlandsImage);
CountryURL.set("葡萄牙", portugalImage);
CountryURL.set("西班牙", spainImage);
CountryURL.set("马耳他", maltaImage);
CountryURL.set("乌干达", ugandaImage);
CountryURL.set("乍得", chadImage);
CountryURL.set("几内亚", guineaImage);
CountryURL.set("加纳", ghanaImage);
CountryURL.set("南非", southAfricaImage);
CountryURL.set("博茨瓦纳", botswanaImage);
CountryURL.set("喀麦隆", cameroonImage);
CountryURL.set("坦桑尼亚", tanzaniaImage);
CountryURL.set("埃及", egyptImage);
CountryURL.set("埃塞俄比亚", ethiopiaImage);
CountryURL.set("多哥", togoImage);
CountryURL.set("安哥拉", angolaImage);
CountryURL.set("尼日利亚", nigeriaImage);
CountryURL.set("纳米比亚", namibiaImage);
CountryURL.set("肯尼亚", kenyaImage);
CountryURL.set("莫桑比克", mozambiqueImage);
CountryURL.set("赞比亚", zambiaImage);
CountryURL.set("阿尔及利亚", algeriaImage);
CountryURL.set("马达加斯加", madagascarImage);
CountryURL.set("马里", maliImage);

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
  return CountryURL.get(country);
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
