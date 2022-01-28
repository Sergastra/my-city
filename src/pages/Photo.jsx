import Typed from "react-typed";
import tele from "./compon/Attrac_img/Астраханская_телебашня.png";
import f1 from "./compon/Attrac_img/15_astrakhan.jpg";
import f2 from "./compon/Attrac_img/1de3d4f3df8abd6ba609b360957ab7b4.jpg";
import f3 from "./compon/Attrac_img/20s.jpg";
import f4 from "./compon/Attrac_img/2364747.jpg";
import f5 from "./compon/Attrac_img/31_astrakhan.jpg";
import f6 from "./compon/Attrac_img/47_astrakhan.jpg";
import f7 from "./compon/Attrac_img/DSC_0328.jpg";
import f8 from "./compon/Attrac_img/EcPB0nWXkAA-G7I.jpg";
import f9 from "./compon/Attrac_img/f_aW1nLmdlbGlvcGhvdG8uY29tL2FzdHJha2hhbi8wMV9hc3RyYWtoYW4uanBnP19faWQ9MTI2ODM3.jpeg";
import f10 from "./compon/Attrac_img/scale_1200.jfif";
import f11 from "./compon/Attrac_img/Ee_brdQWAAEKtDK.jpg";
import f12 from "./compon/Attrac_img/original.jpg";
import f13 from "./compon/Attrac_img/127.jpg";
import f14 from "./compon/Attrac_img/04_astrakhan.jpg";
import f15 from "./compon/Attrac_img/1-naberezhnaya-astrahani.jpg";

const Photo = () => {
    return(
        <>
            <h2>
                < Typed
                    className="typed-text"
                    strings={["Фотографии", "Астрахань"]}
                    typeSpeed={120}
                    backSpeed={150}
                    loop
                />
            </h2>
            <div class="container">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-6 thumb">
                        <a data-fancybox="gallery"  href={f7} target="_blank" >
                            <img className="img-fluid" src={f7} alt="Индийск. подворье" />
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6 thumb">
                        <a data-fancybox="gallery" href={tele} target="_blank">
                            <img className="img-fluid" src={tele} alt="телебашня" />
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6 thumb">
                        <a data-fancybox="gallery" href={f6} target="_blank">
                            <img className="img-fluid" src={f6} alt="Успе́нский собо́р" />
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6 thumb">
                        <a data-fancybox="gallery" href={f5} target="_blank">
                            <img className="img-fluid" src={f5} alt="Астраханский кремль" />
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-6 thumb">
                        <a data-fancybox="gallery" href={f4} target="_blank">
                            <img className="img-fluid" src={f4} alt="Астраханский лотос" />
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6 thumb">
                        <a data-fancybox="gallery" href={f3} target="_blank">
                            <img className="img-fluid" src={f3} alt="Астраханский арбуз" />
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6 thumb">
                        <a data-fancybox="gallery" href={f1} target="_blank">
                            <img className="img-fluid" src={f1} alt="Астраханский лотос" />
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6 thumb">
                        <a data-fancybox="gallery" href={f2} target="_blank">
                            <img className="img-fluid" src={f2} alt="Астраханский арбуз" />
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-6 thumb">
                        <a data-fancybox="gallery" href={f8} target="_blank">
                            <img className="img-fluid" src={f8} alt="Астраханский лотос" />
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6 thumb">
                        <a data-fancybox="gallery" href={f9} target="_blank">
                            <img className="img-fluid" src={f9} alt="Астраханский арбуз" />
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6 thumb">
                        <a data-fancybox="gallery" href={f10} target="_blank">
                            <img className="img-fluid" src={f10} alt="Астраханский лотос" />
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6 thumb">
                        <a data-fancybox="gallery" href={f11} target="_blank">
                            <img className="img-fluid" src={f11} alt="Астраханский арбуз" />
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-6 thumb">
                        <a data-fancybox="gallery" href={f12} target="_blank">
                            <img className="img-fluid" src={f12} alt="Астраханский лотос" />
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6 thumb">
                        <a data-fancybox="gallery" href={f13} target="_blank">
                            <img className="img-fluid" src={f13} alt="Астраханский арбуз" />
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6 thumb">
                        <a data-fancybox="gallery" href={f14} target="_blank">
                            <img className="img-fluid" src={f14} alt="Астраханский лотос" />
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6 thumb">
                        <a data-fancybox="gallery" href={f15} target="_blank">
                            <img className="img-fluid" src={f15} alt="Астраханский арбуз" />
                        </a>
                    </div>
                </div>

            </div>
        </>
    );   
}

export { Photo };