import "./Kisisel.css";

function Kisisel() {
  const hobiler = [
    { id: 1, name: "Bilgisayar oyunları" },
    { id: 2, name: "Futbol" },
    { id: 3, name: "Kitap okumak" },
    { id: 4, name: "Bisiklete binmek" },
  ];

  const yazDil = [
    { id: 1, name: "C" },
    { id: 2, name: "C++" },
    { id: 3, name: "Java" },
    { id: 4, name: "Html,css,js" },
  ];

  return (
    <>
      <div className="container">
        <hr />
        <h1 className="header">Şerafettin Bozkır</h1>
        <hr />
        <div className="body">
          <div className="bolge1" style={{ width: "300px" }}>
            <div>
              <h1>Hobilerim</h1>
              <ol>
                {hobiler.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ol>
            </div>
          </div>

          <div className="bolge2" style={{ width: "300px" }}>
            <div>
              <h1>Yazılım dilleri</h1>
              <ol>
                {yazDil.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ol>
            </div>
          </div>

          <div className="resim1">
            <img src="./src/Resimler/pc.jpg" alt="" />
          </div>
          <div className="resim2">
            <img src="./src/Resimler/futbol.jpg" alt="" />
          </div>
          <div className="resim3">
            <img src="./src/Resimler/kitap.jpg" alt="" />
          </div>
          <div className="resim4">
            <img src="./src/Resimler/bisiklet.jpg" alt="" />
          </div>

          <div className="bolge3">
            <p>
              Merhabalar bu siteyi Mega Yazılım akademisinin bir ödevi olarak
              15/12/2023 tarihinde yapıyorum. ilkokul 1 ve 2'yi kendi
              köyümüzdeki okulda okudum. 3.sınıfı başka bir kasabada 4.sınıfı
              ise bulunduğum ilçede bitirmiştim. Otaokula geçtimde farkklı bir
              içede yurtta kalmaya başladım .2 sene boyunca hafızlık ile brlikte
              okul okudum ve orta okuluda o yurtta tamamladım. liseyi İstanbul
              RTE AİHL lisesinde okudum .O sure zarfınca daha çok fiziksel
              aktivitelerle vaktimi geçirdim diyebilirim (futbol,basketbol vs.)
              .Aslında 11. sınıfın sonuna kadar hedefim tıptı ama sonrada yapay
              zeka vs gelişmesi dikkatimi daha da cezbetmeye başladı.
              arkadaşlarımızla muhebbetler ve biraz araştırmalar sonrası
              blgisayar mühendisliğini tercih ettim. şuanda 2.sınıf öğrencisiyim
              toplulukla ve mega yazlım ile kendimi geliştirme noktasında yol
              katetmeye çalışıyorum
            </p>
          </div>
        </div>

        <div className="footer">
          <hr />
          <a
            className="icon"
            href="https://www.linkedin.com/in/%C5%9Ferafettin-bozk%C4%B1r-086324298/"
            target="_blank"
          >
            <img
              className="linkedin"
              src="./src/Resimler/linkedin.jpg"
              alt=""
            />
          </a>
          <a
            className="icon"
            href="https://github.com/Sero0702"
            target="_blank"
          >
            <img className="github" src="./src/Resimler/github.jpg" alt="" />
          </a>
          <a href="mailto:bozkirsero0702@gmail.com">
            <img className="gmail" src="./src/Resimler/gmail.jpg" alt="" />
          </a>

          <p>Tüm hakları Saklıdır &copy; Şerafettin</p>

          <hr />
        </div>
      </div>
    </>
  );
}
export default Kisisel;
