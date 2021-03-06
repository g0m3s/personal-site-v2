import React from 'react'
import { useEffect, useState } from 'react'
import './style.css'

import wave from '../../img/wave.svg'
import wave2 from '../../img/wave5.svg'
import wave3 from '../../img/wave6.svg'

import logoAurea from '../../img/logoAurea.png'
import empadica from '../../img/empadica.png'
import logoEmporio from '../../img/logoEmporio2.png'
import canvacriativo from '../../img/canvaCriativo.png'

import reactLogo from '../../img/reactLogo.png'
import tsLogo from '../../img/typescriptLogo.png'
import node from '../../img/nodeLogo.png'
import firebase from '../../img/firebaseLogo.png'

import github from '../../img/github.png'
import linkedin from '../../img/linkedin.png'

function Home() {
    
    useEffect(() => {

        // var objDiv = document.getElementById("initialScreen");
        // window.scrollTo(objDiv.clientHeight,objDiv.clientHeight);
        
        window.scrollTo(0, 999999);
    }, []);


    return (

        <div className="homePage flexDisplay" id="homePage" >

            <section className='sixthScreen' >

                <div>

                    <ul>
                        <li><a href='https://github.com/g0m3s' target='_blank' ><img src={github} /></a></li>
                        <li><a href='https://www.linkedin.com/in/gabriel-gomes-a0681a157/' target='_blank' ><img src={linkedin} /></a></li>
                    </ul>

                    <h3 className='boxTextBlackBorder' >Minhas redes sociais</h3>

                </div>

            </section>

            <section className='fifthScreen'>

                <ul>
                    <li><img src={tsLogo} /></li>
                    <li><img src={reactLogo} /></li>
                    <li><img src={firebase} /></li>
                    <li><img src={node} /></li>
                </ul>

                <h2 className='boxTextBorder' >Tecnologias com que trabalho atualmente</h2>

                <img src={wave3} className='wave'/>

            </section>

            <section className='fourthScreen flexDisplay'>

                <div>

                    <ul>

                        <li>

                            <a className='boxProject' href='https://emporio-chi.vercel.app/' target='_blank' >

                                <img src={logoEmporio} />
                                <b>Emp??rio Bom Jardim</b>
                                <p>Uma plataforma de e-commerce de produtos org??nicos</p>
                                <p>Atuei como scrum master no squad que desenvolveu a plataforma</p>

                            </a>

                        </li>

                        <li>

                            <a className='boxProject' href='https://www.canvacriativo.com/' target='_blank' >

                                <img src={canvacriativo} />
                                <b>Canva Criativo</b>
                                <p>Uma landing page para venda de um curso sobre canva</p>
                                <p>Foi um grande desafio pois foi feito em uma tarde e justamente por isso a vers??o mobile est?? infinitamente melhor que a desktop :)</p>

                            </a>

                        </li>

                    </ul>

                    <ul>

                        <li>

                            <a className='boxProject' href='https://aureaej.com/' target='_blank' >

                                <img src={logoAurea} />
                                <b>Site da Aurea</b>
                                <p>Atuei como scrum master no squad que desenvolveu o site</p>
                                <p>A ideia aqui ?? demostrar um pouco da empresa e dos servi??os que ela oferece</p>

                            </a>

                        </li>

                        <li>

                            <a className='boxProject' href='http://empadica.com/' target='_blank' >

                                <img src={empadica} />
                                <b>Empadi??a</b>
                                <p>Foi um servi??o de freelancer feito junto de um amigo</p>
                                <p>Fiquei respons??vel pelo backend. Aqui utilizamos o Firebase.</p>

                            </a>

                        </li>

                    </ul>

                    <div>

                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FFFFFF" d="M50.3,-69.2C63.1,-60,69.7,-42.4,71.7,-25.8C73.7,-9.1,71.1,6.6,66.6,21.9C62,37.2,55.4,52.2,44,63.6C32.5,74.9,16.3,82.7,0.4,82.1C-15.5,81.6,-31.1,72.9,-46.8,62.9C-62.6,53,-78.5,41.9,-85.4,26.4C-92.4,10.9,-90.2,-8.8,-80.9,-22.9C-71.7,-36.9,-55.3,-45.3,-40.6,-53.7C-26,-62.2,-13,-70.9,2.9,-74.9C18.8,-78.9,37.6,-78.3,50.3,-69.2Z" transform="translate(100 100)" />
                    </svg>
                    
                        <span >Meus projetos</span>

                    </div>

                    <img src={wave2} className='wave'/>
                
                </div>
                    
            </section>

            <section className='thirdScreen flexDisplay'>

                <div>

                    <ul>

                        <li className='boxTextBorder' >Estou cursando Eng. de Computa????o.???? </li>
                        <li className='boxTextBorder' >Participei do NASA Space Apps Covid 2020. ???? </li>
                        <li className='boxTextBorder' >Sou formado como t??cnico em eletr??nica. ???? </li>
                        <li className='boxTextBorder' >Engenheiro de computa????o estagi??rio pela UENF ???? </li>
                        <li className='boxTextBorder' >Fui bolsista no Projeto Engenhocas (Voltado a dissemina????o da rob??tica e programa????o). ??? </li>
                        <li className='boxTextBorder' >J?? ministrei um minicurso sobre cria????o de Apps com o MIT AppInventor. ???? </li>
                        <li className='boxTextBorder' >Atualmente trabalho como Assessor de projetos e desenvolvedor na Aurea Solu????es e Projetos. ???? </li>
                        <li className='boxTextBorder' >3?? lugar no hackathon Hacking Rio Covid-19 (vertical empregabilidade). ????  </li>
                        <li className='boxTextBorder' >Fui finalista mundial no hackathon NASA Space Apps 2019. ???? </li>

                    </ul>

                    <h3 className='boxTextBlackBorder' >Falando um pouco das minhas experi??ncias profissionais...</h3>
                
                </div>
                    
            </section>

            <section className='secondScreen flexDisplay'>

                <div>

                    <h3 className='boxTextBlack'>E por isso estou em busca de um trabalho como desenvolvedor. Indo al??m dos meus jobs como freelancer</h3>

                    <h3 className='boxTextBlack'>Mas sinto que est?? na hora de dar mais um passo</h3>

                    <h3 className='boxTextBlack'>Sem d??vidas as experi??ncias que tive l?? me agregaram muito em hard e soft skills</h3>

                    <h3 className='boxTextBlack'>L?? atuo como gerente de projetos e desenvolvedor fullstack</h3>

                    <h3 className='boxTextBlack'>Atualmente trabalho com muito orgulho na Aurea Solu????es e projetos, uma empresa j??nior sediada no IFF Centro</h3>

                    <h3 className='boxTextBlack'>Mas como estou atualmente? vamos l??!</h3>

                    <h3 className='boxTextBlack'>Tamb??m brinquei bastante com o scratch at?? decidir que realmente era isso que queria pra minha vida</h3>

                    <h3 className='boxTextBlack'>Naquela ??poca eu fazia v??rios "v??rus" no bloco de notas para assustar meu amigos</h3>

                    <h3 className='boxTextBlack'>Me chamo Gabriel, tenho 19 anos e sou completamente apaixonado por programa????o desde sei l??, meus 12 anos</h3>
                
                </div>
                    
                <img src={wave} className='wave' />

            </section>

            <section className='initialScreen flexDisplay' id="initialScreen" >

                <h2 className='boxText' >???</h2>

                <h1 className='boxText' >Ol?? :)</h1>
                    
            </section>
            
            {/* <section id='initialScreen' ></section> */}

        </div>

    )

}

export default Home;
