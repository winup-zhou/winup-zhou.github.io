# MetroAts 地铁直通系统用ATC/S插件

本插件主要基于东京首都圈的地铁直通系统进行ATC/S信号系统的部分复原。  
使用了[BveEX](https://github.com/automatic9045/BveEX)提供的部分功能来获得更好的模拟效果。

## 项目开源许可

![GitHub License](https://img.shields.io/github/license/winup-zhou/MetroAts)  

::: details
```
MIT License

Copyright (c) 2023 Win_Update

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
:::

本项目基于MIT许可开源。

## 插件当前开发状况

以下为完成的功能：

::: info
### 核心插件
- 信号系统选择开关
- 主控钥匙
### 信号系统  
#### 東武
- TSP-ATS  
- T-DATC  
#### 西武  
- 旧CS-ATC  
- 西武ATS  
#### メトロ·東葉  
- 新CS-ATC  
- WS-ATC  
#### 東急  
- ATC-P  
- 東急ATS  
#### 相鉄·JR  
- ATS-P  
- ATS-SN  

### 其他  
- メトロ総合プラグイン部分兼容性  
:::

以下为计划中未完成的部分：

::: info
### 信号系统  
#### 東武 
- TC-ATS __未投用__  
#### メトロ·東葉  
- CS-DATC __未投用__  
- ATP __未投用__   
#### 小田急
- OM-ATS  
- D-ATS-P 
### 其他  
- ATO/TASCプラグイン兼容性  
:::

## 插件使用说明

请参阅[winup-zhou/MetroAts Wiki](https://github.com/winup-zhou/MetroAts/wiki)

::: warning
由于插件目标用户为日本作者，维基目前仅提供日文版本。
:::

## 插件下载

开发版(GitHub Actions)：  
[![MSBuild](https://github.com/winup-zhou/MetroAts/actions/workflows/build.yml/badge.svg)](https://github.com/winup-zhou/MetroAts/actions/workflows/build.yml)

正式版：  
![GitHub Release](https://img.shields.io/github/v/release/winup-zhou/MetroAts)


## 参与开发
如果你对该项目有兴趣，欢迎加入一同开发。  
本项目可能需要较多的日本铁路信号系统的相关知识。    
[winup-zhou/MetroAts: 地下鉄系ATC/Sプラグイン for Bve TrainSim](https://github.com/winup-zhou/MetroAts)

## 参考文献
```
Kyosan circular : technical journal:
東葉高速鉄道株式会社 東葉高速線 CS-DATCへの列車制御システム更新 : 安全性・運転能率の向上とメンテナンスの省力化. Kyosan circular : technical journal. 76(4)=375:2025,p.6-10. https://ndlsearch.ndl.go.jp/books/R000000004-I034337584

JREA:
渡邊 重利ほか. 銀座線に導入するパターン速照式一段ブレーキ制御ATC. JREA. 62(8):2019.8,p.43342-43345. https://ndlsearch.ndl.go.jp/books/R000000004-I029910886
小川 祥吾. 丸ノ内線へのCBTCシステム導入. JREA. 59(8):2016.8,p.40594-40597. https://ndlsearch.ndl.go.jp/books/R000000004-I027566864

鉄道車両と技術:
関口 慎一. 東京地下鉄 CBTCシステムの導入にあたって. 鉄道車両と技術 = Rolling stock & technology. 26(1)=271:2020.8,p.2-6. https://ndlsearch.ndl.go.jp/books/R000000004-I030609340

鉄道と電気技術:
関口 慎一. 東京メトロのCBTC. 鉄道と電気技術 = Railway & electrical engineering. 27(10)=822:2016.10,p.24-28. https://ndlsearch.ndl.go.jp/books/R000000004-I027659746
平林 峻ほか. 無線技術を利用した列車制御(CBTC等)について : 東京メトロのCBTC導入へ向けた進捗報告. 鉄道と電気技術 = Railway & electrical engineering. 33(4)=888:2022.4,p.3-8. https://ndlsearch.ndl.go.jp/books/R000000004-I032079823
室井 良祐. 丸ノ内線における無線式列車制御(CBTC)システムの導入. 鉄道と電気技術 = Railway & electrical engineering. 36(7)=927:2025.7,p.51-58. https://ndlsearch.ndl.go.jp/books/R000000004-I034238964
谷津 正美ほか. 銀座線に導入する地上主体型パターン制御式ATC(CS-DATC). 鉄道と電気技術 = Railway & electrical engineering. 29(3)=839:2018.3,p.9-14. https://ndlsearch.ndl.go.jp/books/R000000004-I028874485
宇田川 一雄. テーマ技術資料 東京地下鉄東西線地上主体型デジタル伝送方式のATC地上装置概要. 鉄道と電気技術 = Railway & electrical engineering. 16(10) (通号 690) 2005.10,p.29～32. https://ndlsearch.ndl.go.jp/books/R000000004-I7489370
狩野 澄雄. 東武東上線のATSからATCへの更新. 鉄道と電気技術 = Railway & electrical engineering. 27(8)=820:2016.8,p.57-61. https://ndlsearch.ndl.go.jp/books/R000000004-I027568544
箭本 芳人. 講座 ATC(16)JR在来線のATC(1). 鉄道と電気技術 = Railway & electrical engineering. 17(9) (通号 701) 2006.9,p.83～91. https://ndlsearch.ndl.go.jp/books/R000000004-I8074451
北村 直久. 講座 ATC(17)在来線のATC(2). 鉄道と電気技術 = Railway & electrical engineering. 17(10) (通号 702) 2006.10,p.86～91. https://ndlsearch.ndl.go.jp/books/R000000004-I8520534
石川 洋輔. JR、民鉄のATS(2)JR東日本のATS. 鉄道と電気技術 = Railway & electrical engineering. 21(12) (通号 752) 2010.12,p.66～70. https://ndlsearch.ndl.go.jp/books/R000000004-I10916520
石井 英二. JR、民鉄のATS(6)東武鉄道のATS. 鉄道と電気技術 = Railway & electrical engineering. 22(4) (通号 756) 2011.4,p.84～88. https://ndlsearch.ndl.go.jp/books/R000000004-I11053655
小川 泰男. JR、民鉄のATS(9)小田急電鉄のATS. 鉄道と電気技術 = Railway & electrical engineering. 22(7) (通号 759) 2011.7,p.81～85. https://ndlsearch.ndl.go.jp/books/R000000004-I11162760
平川 善史. JR・民鉄のATS(14)西武鉄道のATS. 鉄道と電気技術 = Railway & electrical engineering. 22(12)=764:2011.12,p.86-90. https://ndlsearch.ndl.go.jp/books/R000000004-I023336618

運転協会誌:
縄田 雅之. 無線式列車制御システム(CBTC)の導入に向けた取組み : システム概要,運転取扱いの策定,教育の実施 : 東京地下鉄. 運転協会誌 / 日本鉄道運転協会 [編]. 65(3)=765:2023.3,p.9-12. https://ndlsearch.ndl.go.jp/books/R000000004-I032740413
福田 大介. 相模鉄道の保安装置の概要. 運転協会誌 / 日本鉄道運転協会 [編]. 65(3)=765:2023.3,p.13-16. https://ndlsearch.ndl.go.jp/books/R000000004-I032740416
韮澤 裕. 我が社の列車運転取扱いと信号保安システム(1)東京メトロの自動列車制御装置(ATC)と運転取扱い. 運転協会誌 / 日本鉄道運転協会 [編]. 54(1)=631:2012.1,p.32-36. https://ndlsearch.ndl.go.jp/books/R000000004-I023410586
佐藤 信介ほか. 列車運転取扱いと信号保安システム(2)JR東日本における列車の運転方法と運転保安システム. 運転協会誌 / 日本鉄道運転協会 [編]. 54(2)=632:2012.2,p.42-45. https://ndlsearch.ndl.go.jp/books/R000000004-I023514504
橋本 弘隆ほか. 列車運転取扱いと信号保安システム(3)西武鉄道の無線を利用した列車情報装置による運転保安. 運転協会誌 / 日本鉄道運転協会 [編]. 54(3)=633:2012.3,p.36-39. https://ndlsearch.ndl.go.jp/books/R000000004-I023571718
加藤 巧也. 列車運転取扱いと信号保安システム(4)小田急電鉄における列車の運転方法と自動列車停止装置(ATS)の概要について. 運転協会誌 / 日本鉄道運転協会 [編]. 54(4)=634:2012.4,p.26-30. https://ndlsearch.ndl.go.jp/books/R000000004-I023662874
河野 和夫. 列車運転取扱いと信号保安システム(7)東武鉄道における列車の運転方法と運転保安システム. 運転協会誌 / 日本鉄道運転協会 [編]. 54(7)=637:2012.7,p.42-46. https://ndlsearch.ndl.go.jp/books/R000000004-I023866283
小代 雄大ほか. 列車運転取扱いと信号保安システム(9)東急電鉄における列車運転取扱いと信号保安システム. 運転協会誌 / 日本鉄道運転協会 [編]. 54(9)=639:2012.9,p.44-47. https://ndlsearch.ndl.go.jp/books/R000000004-I023980377

鉄道建設史:
帝都高速度交通営団 編. 東京地下鉄道東西線建設史, 帝都高速度交通営団, 1978.7, 10.11501/12679200. https://ndlsearch.ndl.go.jp/books/R100000002-I000001399293
帝都高速度交通営団 編. 東京地下鉄道千代田線建設史, 帝都高速度交通営団, 1983.6, 10.11501/12654878. https://ndlsearch.ndl.go.jp/books/R100000002-I000001724510
帝都高速度交通営団 編. 東京地下鉄道半蔵門線建設史(渋谷～水天宮前), 帝都高速度交通営団, 1999.3, 10.11501/14329887. https://ndlsearch.ndl.go.jp/books/R100000002-I000002768185
帝都高速度交通営団／編集. 東京地下鉄道副都心線線建設史, 帝都高速度交通営団, ２００４．３. https://ndlsearch.ndl.go.jp/books/R100000001-I12211000800516876
東京急行電鉄株式会社 編. 新玉川線建設史, 東京急行電鉄, 1980.8, 10.11501/12046075. https://ndlsearch.ndl.go.jp/books/R100000002-I000001500132
```