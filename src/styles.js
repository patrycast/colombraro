import styled, { createGlobalStyle, keyframes } from 'styled-components';

export const c = { gray: '#cfcfcf', dark: '#b9b9b9', light: '#e6e6e6', black: '#000' };
const rm = '@media (prefers-reduced-motion: reduce)';
const ease = 'cubic-bezier(.2,.7,.2,1)';
const display = "'Bricolage Grotesque','Public Sans',sans-serif";

export const Global = createGlobalStyle`
  *{box-sizing:border-box;margin:0}
  html{scroll-behavior:smooth;scroll-padding-top:80px}
  body{background:${c.gray};color:${c.black};overflow-x:clip;font:400 1.0625rem/1.6 'Public Sans',system-ui,sans-serif;-webkit-font-smoothing:antialiased}
  h1,h2,h3{font-family:${display};line-height:1.05;letter-spacing:-.02em;font-weight:800}
  a{color:inherit}
  img{display:block;max-width:100%}
  :focus-visible{outline:3px solid ${c.black};outline-offset:3px}
  ${rm}{html{scroll-behavior:auto}}
`;

export const Wrap = styled.div`max-width:1200px;margin:0 auto;padding:0 clamp(16px,4vw,24px);`;

/* Header */
export const Header = styled.header`position:sticky;top:0;z-index:10;background:${c.gray};border-bottom:2px solid ${c.black};`;
export const HeadRow = styled(Wrap)`
  display:flex;align-items:center;justify-content:space-between;gap:16px;height:72px;
  @media(max-width:520px){
    > a:last-of-type{display:none}
  }
`;
export const Brand = styled.a`font:800 1.35rem ${display};text-decoration:none;@media(max-width:480px){font-size:1.1rem}`;
export const Nav = styled.nav`
  display:flex;gap:28px;align-items:center;
  a{font-weight:600;text-decoration:none;padding-bottom:2px;background:linear-gradient(${c.black},${c.black}) 0 100%/0 2px no-repeat;transition:background-size .3s ${ease}}
  a:hover{background-size:100% 2px}
  @media(max-width:860px){position:absolute;top:72px;left:0;right:0;flex-direction:column;align-items:flex-start;gap:18px;padding:24px;background:${c.gray};border-bottom:2px solid ${c.black};display:${(p) => (p.$open ? 'flex' : 'none')}}
`;
export const MenuBtn = styled.button`display:none;background:none;border:2px solid ${c.black};padding:8px 14px;font:600 1rem 'Public Sans',sans-serif;;cursor:pointer;@media(max-width:860px){display:block}`;
export const Btn = styled.a`
  display:inline-block;padding:14px 26px;border:2px solid ${c.black};font-weight:700;text-decoration:none;cursor:pointer;
  background:${(p) => (p.$ghost ? 'transparent' : c.black)};color:${(p) => (p.$ghost ? c.black : c.gray)};
  transition:transform .2s ${ease},background .2s,color .2s;
  &:hover{transform:translateY(-3px);background:${(p) => (p.$ghost ? c.black : c.light)};color:${(p) => (p.$ghost ? c.gray : c.black)}}
    @media(max-width:480px){padding:11px 16px}
  `;

/* Hero (secuencia de carga) */
const rise = keyframes`from{transform:translateY(110%)}to{transform:none}`;
export const Hero = styled.section`padding:clamp(40px,7vw,96px) 0 clamp(56px,8vw,110px);`;
export const HeroGrid = styled(Wrap)`display:grid;grid-template-columns:1.2fr 1fr;gap:48px;align-items:center;@media(max-width:900px){grid-template-columns:1fr}`;
export const H1 = styled.h1`font-size:clamp(2.7rem,7.5vw,6rem);margin-bottom:28px;`;
export const Line = styled.span`
  display:block;overflow:hidden;padding-bottom:.08em;
  span{display:block;animation:${rise} .9s ${ease} both;animation-delay:${(p) => p.$d}ms}
  ${rm}{span{animation:none}}
`;
export const HeroText = styled.p`max-width:46ch;margin-bottom:32px;`;
export const Actions = styled.div`display:flex;flex-wrap:wrap;gap:14px;@media(max-width:480px){a{flex:1 1 100%;text-align:center}}`;
export const Slots = styled.div`display:grid;grid-template-columns:1fr 1fr;gap:16px;> :first-child{grid-row:span 2}`;

/* Imagen vacía: se llena con la prop src */
export const Slot = styled.div`
  background:${c.light};border:2px solid ${c.black};overflow:hidden;
  aspect-ratio:${(p) => p.$r};
  img{width:100%;height:100%;object-fit:cover;transition:transform .6s ${ease}}
`;

/* Animación de entrada por scroll */
const from = { up: 'translateY(36px)', left: 'translateX(-48px)', scale: 'scale(.92)', wipe: 'none' };

export const RevealBox = styled.div`
  opacity:0;
  transform:${(p) => from[p.$v]};
  clip-path:${(p) => (p.$v === 'wipe' ? 'inset(0 100% 0 0)' : 'none')};
  transition:opacity .8s ${ease} ${(p) => p.$d}ms,transform .8s ${ease} ${(p) => p.$d}ms,clip-path .9s ${ease} ${(p) => p.$d}ms;
  &.in{
    opacity:1;
    transform:none;
    clip-path:${(p) => (p.$v === 'wipe' ? 'inset(0 0 0 0)' : 'none')};
  }
  ${rm}{opacity:1;transform:none;clip-path:none;transition:none}
`;

/* Secciones */
export const Section = styled.section`padding:clamp(40px,6vw,72px) 0;border-top:2px solid ${c.black};background:${(p) => (p.$alt ? c.dark : 'transparent')};`;
export const H2 = styled.h2`font-size:clamp(2rem,5vw,3.6rem);max-width:18ch;margin-bottom:16px;`;
export const Lead = styled.p`max-width:58ch;margin-bottom:48px;`;
export const Cards = styled.div`display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:32px 24px;`;
export const Card = styled.article`
  display:flex;flex-direction:column;gap:12px;
  h3{font-size:1.5rem} p{max-width:40ch} a{font-weight:700}
  &:hover img{transform:scale(1.06)}
`;
export const Row = styled.div`display:grid;grid-template-columns:1fr 1.4fr;gap:24px;padding:28px 0;border-top:2px solid ${c.black};h3{font-size:1.6rem}@media(max-width:700px){grid-template-columns:1fr}`;
export const Steps = styled.div`display:grid;grid-template-columns:repeat(3,1fr);gap:32px;@media(max-width:800px){grid-template-columns:1fr}`;
export const Step = styled.div`border-top:2px solid ${c.black};padding-top:20px;b{display:block;font:800 4rem/1 ${display};margin-bottom:8px}h3{font-size:1.5rem;margin-bottom:6px}`;

/* Preguntas frecuentes */
export const FaqItem = styled.div`border-top:2px solid ${c.black};&:last-child{border-bottom:2px solid ${c.black}}`;
export const FaqBtn = styled.button`
  width:100%;display:flex;justify-content:space-between;gap:16px;padding:22px 0;background:none;border:0;cursor:pointer;text-align:left;
  font:700 1.25rem ${display};color:${c.black};
  i{font-style:normal;transition:transform .35s ${ease};transform:rotate(${(p) => (p.$open ? 45 : 0)}deg)}
`;
export const FaqBody = styled.div`display:grid;grid-template-rows:${(p) => (p.$open ? '1fr' : '0fr')};transition:grid-template-rows .4s ${ease};p{overflow:hidden;max-width:60ch}${rm}{transition:none}`;

export const Cta = styled.div`border:2px solid ${c.black};background:${c.light};padding:clamp(32px,6vw,72px);h2{max-width:20ch;margin-bottom:20px}p{margin-bottom:28px;max-width:50ch}`;

/* Footer */
export const Footer = styled.footer`background:${c.dark};border-top:2px solid ${c.black};`;
export const FootGrid = styled(Wrap)`display:grid;grid-template-columns:2fr 1fr 1fr;gap:32px;padding-top:56px;padding-bottom:48px;h3{font-size:1.2rem;margin-bottom:10px}li{list-style:none;margin-bottom:6px}ul{padding:0}@media(max-width:800px){grid-template-columns:1fr}`;
export const Social = styled.a`
  display:inline-flex;align-items:center;justify-content:center;width:48px;height:48px;border:2px solid ${c.black};margin-top:16px;
  transition:background .2s,color .2s,transform .2s ${ease};
  &:hover{background:${c.black};color:${c.gray};transform:rotate(-6deg) scale(1.08)}
`;
export const Credit = styled.div`border-top:2px solid ${c.black};text-align:center;padding:16px 24px;font-size:.92rem;a{font-weight:600}`;

/* Opiniones */
export const Rating = styled.p`display:flex;flex-wrap:wrap;align-items:baseline;gap:8px 16px;margin-bottom:40px;b{font:800 clamp(3.5rem,9vw,6rem)/1 ${display}}`;
export const Quote = styled.blockquote`border:2px solid ${c.black};background:${c.light};padding:28px;font:700 1.35rem/1.3 ${display};height:100%;`;
