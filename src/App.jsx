import { useEffect, useRef, useState } from 'react';
import * as S from './styles';
import { business, waLink, mapLink, credit, rating, reviews, categories, benefits, steps, faqs } from './data';

function Reveal({ v = 'up', d = 0, as, children, ...rest }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return setOn(true);
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setOn(true), io.disconnect()), { threshold: 0.15 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return <S.RevealBox ref={ref} as={as} $v={v} $d={d} className={on ? 'in' : ''} {...rest}>{children}</S.RevealBox>;
}

const Slot = ({ src, alt = '', ratio = '4/3' }) => (
  <S.Slot $r={ratio}>{src && <img src={src} alt={alt} />}</S.Slot>
);

function Faq({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <S.FaqItem>
      <S.FaqBtn $open={open} aria-expanded={open} onClick={() => setOpen(!open)}>{q}<i>+</i></S.FaqBtn>
      <S.FaqBody $open={open}><p>{a}</p></S.FaqBody>
    </S.FaqItem>
  );
}

export default function App() {
  const [menu, setMenu] = useState(false);
  const close = () => setMenu(false);
  return (
    <>
      <S.Global />
      <S.Header>
        <S.HeadRow>
          <S.Brand href="#inicio">{business.name}</S.Brand>
          <S.Nav $open={menu} onClick={close}>
            <a href="#productos">Productos</a>
            <a href="#ventajas">Ventajas</a>
            <a href="#opiniones">Opiniones</a>
            <a href="#como-comprar">Cómo comprar</a>
            <a href="#preguntas">Preguntas</a>
            <a href="#contacto">Contacto</a>
          </S.Nav>
          <S.Btn href={waLink()} target="_blank" rel="noopener noreferrer">WhatsApp</S.Btn>
          <S.MenuBtn onClick={() => setMenu(!menu)} aria-expanded={menu}>Menú</S.MenuBtn>
        </S.HeadRow>
      </S.Header>

      <main>
        <S.Hero id="inicio">
          <S.HeroGrid>
            <div>
              <S.H1>
                <S.Line $d={0}><span>Plásticos y más</span></S.Line>
                <S.Line $d={120}><span>para tu hogar,</span></S.Line>
                <S.Line $d={240}><span>a domicilio.</span></S.Line>
              </S.H1>
              <S.HeroText>Tienda de artículos para el hogar en Mar del Tuyú. Mucho surtido, buenos precios y atención amable. Pedí por WhatsApp y te lo llevamos.</S.HeroText>
              <S.Actions>
                <S.Btn href={waLink('Hola! Quiero hacer un pedido.')} target="_blank" rel="noopener noreferrer">Pedí por WhatsApp</S.Btn>
                <S.Btn $ghost href="#productos">Ver productos</S.Btn>
              </S.Actions>
            </div>
           <Reveal v="scale" d={300}>
            <Slot src="/img/colombraro-portada1.webp" ratio="4/5" alt="Entrada del local Colombraro" />
          </Reveal>

          </S.HeroGrid>
        </S.Hero>

        <S.Section id="productos">
          <S.Wrap>
            <Reveal v="left"><S.H2>Lo que necesitás, en plástico</S.H2></Reveal>
            <Reveal d={100}><S.Lead>Estas son nuestras categorías. Si no ves lo que buscás, escribinos y lo consultamos.</S.Lead></Reveal>
            <S.Cards>
              {categories.map((cat, i) => (
                <Reveal as="div" key={cat.title} d={(i % 3) * 120}>
                  <S.Card>
                    <Slot src={cat.image} alt={cat.title} />
                    <h3>{cat.title}</h3>
                    <p>{cat.text}</p>
                    <a href={waLink(`Hola! Quiero consultar por ${cat.title}.`)} target="_blank" rel="noopener noreferrer">Consultar precios</a>
                  </S.Card>
                </Reveal>
              ))}
            </S.Cards>
          </S.Wrap>
        </S.Section>

        <S.Section id="ventajas" $alt>
          <S.Wrap>
            <Reveal ><S.H2>Por qué comprar con nosotros</S.H2></Reveal>
            {benefits.map(([t, p], i) => (
              <Reveal v="left" d={i * 100} key={t}><S.Row><h3>{t}</h3><p>{p}</p></S.Row></Reveal>
            ))}
          </S.Wrap>
        </S.Section>

        <S.Section id="opiniones">
          <S.Wrap>
            <Reveal ><S.H2>Lo que dicen nuestros clientes</S.H2></Reveal>
            <Reveal d={100}><S.Rating><b>{rating.score}</b><span>de 5 según {rating.count} opiniones en Google</span></S.Rating></Reveal>
            <S.Cards>
              {reviews.map((q, i) => (
                <Reveal key={q} v="scale" d={i * 150}><S.Quote>“{q}”</S.Quote></Reveal>
              ))}
            </S.Cards>
          </S.Wrap>
        </S.Section>

        <S.Section id="como-comprar">
          <S.Wrap>
            <Reveal ><S.H2>Comprar es simple</S.H2></Reveal>
            <S.Steps>
              {steps.map(([t, p], i) => (
                <Reveal d={i * 150} key={t}><S.Step><b>{i + 1}</b><h3>{t}</h3><p>{p}</p></S.Step></Reveal>
              ))}
            </S.Steps>
          </S.Wrap>
        </S.Section>

        <S.Section id="preguntas" $alt>
          <S.Wrap>
            <Reveal ><S.H2>Preguntas frecuentes</S.H2></Reveal>
            <Reveal d={100}>{faqs.map(([q, a]) => <Faq key={q} q={q} a={a} />)}</Reveal>
          </S.Wrap>
        </S.Section>

        <S.Section id="contacto">
          <S.Wrap>
            <Reveal v="scale">
              <S.Cta>
                <h2>¿Armamos tu pedido?</h2>
                <p>Contanos qué necesitás y te respondemos con precios y stock. {business.hours}.</p>
                <S.Btn href={waLink('Hola! Quiero hacer un pedido.')} target="_blank" rel="noopener noreferrer">Escribinos por WhatsApp</S.Btn>
              </S.Cta>
            </Reveal>
          </S.Wrap>
        </S.Section>
      </main>

      <S.Footer>
        <S.FootGrid>
          <Reveal>
            <h3>{business.name}</h3>
            <p>Tienda de artículos para el hogar en Mar del Tuyú.</p>
            <S.Social href={business.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </S.Social>
          </Reveal>
          <Reveal d={120}>
            <h3>Secciones</h3>
            <ul><li><a href="#productos">Productos</a></li><li><a href="#ventajas">Ventajas</a></li><li><a href="#preguntas">Preguntas</a></li></ul>
          </Reveal>
          <Reveal d={240}>
            <h3>Contacto</h3>
            <p>{business.address}</p>
            <p>{business.hours}</p>
            <p>{business.phone}</p>
            <p><a href={mapLink} target="_blank" rel="noopener noreferrer">Cómo llegar</a></p>
          </Reveal>
        </S.FootGrid>
        <S.Credit>
          <a href={credit} target="_blank" rel="noopener noreferrer">Desarrollado por Patricia Castillo</a>
        </S.Credit>
      </S.Footer>
    </>
  );
}
