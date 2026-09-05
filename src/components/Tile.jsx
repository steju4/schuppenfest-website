import Reveal from './Reveal.jsx'

/**
 * Grundbaustein der Seite: eine Kachel im gemeinsamen Raster.
 * Die Spaltenbreite kommt als Klasse von aussen, damit Tailwind sie sieht.
 */
export default function Tile({
  as = 'div',
  className = '',
  delay = 0,
  children,
  ...rest
}) {
  return (
    <Reveal as={as} delay={delay} className={`tile ${className}`} {...rest}>
      {children}
    </Reveal>
  )
}
