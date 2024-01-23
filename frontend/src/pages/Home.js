import React from "react";
import Groups from "../components/Question/Groups";
import {useState} from "react";
import Question from "../components/Question/Question";


function Home() {
    const [points1, set1Points] = useState(0);
    const [points2, set2Points] = useState(0);
    const [points3, set3Points] = useState(0);
    const [points4, set4Points] = useState(0);

  return (
    <div className="App">
        <Groups points1={points1} points2={points2} points3={points3} points4={points4}/>

        <br /><br /><br />
        <div className="container">
            <h3>Všeobecné znalosti</h3>
            <div className="row">
                <div className="col-sm-1">
                    <Question price={10} variant="success" question="Jaké jsou čtyři roční období a jak se liší?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={50} variant="success" question="Kolik máme prstů na rukou a nohou dohromady?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={100} variant="success" question="Jak se jmenuje hlavní město České republiky?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={150} variant="success" question="Kolik má Česká Republika krajů?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={200} variant="success" question="Která země je největší na světě?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={250} variant="success" question="Která planeta ve sluneční soustavě je nejblíže Slunci?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={500} variant="success" question="Jak se jmenuje největší oceán na Zemi?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={1000} variant="success" question="Jak se nazývá největší kontinent na Zemi?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={2500} variant="success" question="Který hmyz vytváří med a žije ve společenství nazvaném úl?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={3000} variant="success" question="Jak se jmenuje největší pohoří na světě?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={5000} variant="success" question='Jak se jmenuje naše galaxie, ve které se nachází Sluneční soustava?' points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={10000} variant="success" question="Co je to recyklace a proč je důležitá pro životní prostředí?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={11000} variant="success" question="Kterým nástrojem měříme teplotu?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={15000} variant="success" question="Jak se nazývá proces, při kterém voda mění skupenství z kapalného do plynného stavu?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={20000} variant="success" question="Kde se narodil pilot Josef František, který zemřel během druhé světové války?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
            </div>

            <br /><br />
            <h3>Církev, historie církve</h3>
            <div className="row">
                <div className="col-sm-1">
                    <Question price={10} variant="primary" question="Ve kterém století působil na zemi Ježíš?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={50} variant="primary" question="Kde se narodil Ježíš?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={100} variant="primary" question="Kolik let Ježíš veřejně působil a v kolika letech byl ukřižován?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={150} variant="primary" question="Kolik máme evangelií?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={200} variant="primary" question="Co je to modlitba?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={250} variant="primary" question="Jak se nazývá oslava, která symbolizuje poslední večeři a koná se v kostele?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={500} variant="primary" question="Co symbolizuje křest a jak se provádí?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={1000} variant="primary" question="Co je to kázání a kdo ho v kostele pronáší?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={2500} variant="primary" question="Kdo jsou mučedníci?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={3000} variant="primary" question="Jaký je význam podobenství o marnotratném synu?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={5000} variant="primary" question='Co znamená slovo <strong>"apoštol"</strong> a proč jsou tito lidé důležití?' points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={10000} variant="primary" question="Jaké události popisuje kniha skutky apoštolů?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={11000} variant="primary" question="Jaké události popisuje kniha Zjevení Janovo?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={15000} variant="primary" question="Co se proměnilo na druhém Vatikánském koncilu?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={20000} variant="primary" question="Doplňte vynechané slovo z textu 1 Korintským 13:4-8:<br><br> <p>_ je trpělivá, je laskavá, _ nezávidí, _ se nevychloubá ani nepovyšuje; není hrubá, nehledá svůj prospěch, není vznětlivá, nepočítá křivdy, není škodolibá, ale raduje se z pravdy; všechno snáší, všemu věří, vždycky doufá, všechno vydrží. _ nikdy neskončí. Avšak proroctví – ta zaniknou, jazyky – ty umlknou, poznání – to pomine.</p>" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
            </div>

            <br /><br />

            <h3>Advent a svatí</h3>
            <div className="row">
                <div className="col-sm-1">
                    <Question price={10} variant="warning" question="slovo advent znamená příchod, v jakém jazyce?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={50} variant="warning" question="Co jedl Jan Křtitel na poušti <p>a) manu z nebe a křepelky</p> <p>b) kobylky a med</p> <p>c) kořínky, semena a pil vodu ze skály</p>" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={100} variant="warning" question="Co <strong>není</strong> atribut sv. Barbory? <p>a) dělo</p> <p>b)paví pera</p> <p>c)nůžky</p>" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={150} variant="warning" question="Kolik oken měla věž ve které byla sv. Barora vězněna?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={200} variant="warning" question="Jaká je barva adventu?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={250} variant="warning" question="Jak dlouho trvá advent?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={500} variant="warning" question="Co dělal dobrého sv. Mikuláš? <p>a) uzdravoval všechny nemocné</p> <p>b) vyháněl zlé duchy</p> <p>c) obdarovával chudé</p>" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={1000} variant="warning" question="Sv. Mikuláš byl: <p>a) biskup</p> <p>b) papež</p> <p>c) františkánský mnich</p>" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={2500} variant="warning" question="Myra kde zemřel sv. Mikuláš je město ležící v turecku, jak se jmenuje? <p>a) Ankara</p> <p>b) Konya</p> <p>c) Demre</p>" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={3000} variant="warning" question="Jak zní pranostika se svatou Lucií?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={5000} variant="warning" question='V Neapoli je uchován relikviář s relikviemi sv. Lucie. Co je tato relikvie? <p>a) kousek kosti z ruky</p> <p>b) oči</p> <p>c)vlas</p>' points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={10000} variant="warning" question="V době adventní jsou typické ranní mše, jak se jim říká?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={11000} variant="warning" question="Kolikátá svíčka na adventním věnci je růžová?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={15000} variant="warning" question="Kdy začala letos adventní doba? <p>a) 3.12.</p> <p>b) 30.11.</p> <p>c) 1.12</p>" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
            </div>
            <br /><br />

            <h3>Vedoucí a tábor</h3>
            <div className="row">
                <div className="col-sm-1">
                    <Question price={10} variant="danger" question="Jak se jmenoval faraon na naší výpravě v egyptě?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={50} variant="danger" question="Kolik měří náš nejvyšší vedoucí a kdo to je?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={100} variant="danger" question="Vyjmenuj alespoň 3 vikingská jména vedoucích" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={150} variant="danger" question="Jakou zbraň měl náš hlavní stařešina?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={200} variant="danger" question="V jakých lodích se plavili Vikingové?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={250} variant="danger" question="Kolik otvorů měly mince které jsme sbírali do měšců?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={500} variant="danger" question="Kdo vytvořil niagarské vodopády?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={1000} variant="danger" question="Jaký koníček měl kněz z Dubu nad Moravou?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={2500} variant="danger" question="Kolik rohlíků se sní na jednom potáborku? <p>a) 200</p> <p>b) 150</p> <p>c) 100</p>" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={3000} variant="danger" question="Jak se jmenoval padouch kterého jsme chytili se Sherlockem?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={5000} variant="danger" question='Kdo byli hlavní rádcové faraona?' points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={10000} variant="danger" question="<i>Dostáváte body zadarmo</i> 😀" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;
