import { pick, type Block } from '../content/types';
import { useSettings } from '../settings';
import { Sketch } from '../sketches';
import { RichText } from './RichText';

export function BlockView({ block }: { block: Block }) {
  const { locale } = useSettings();
  const L = (x: Parameters<typeof pick>[0]) => pick(x, locale);

  switch (block.type) {
    case 'p':
      return <p><RichText text={L(block.text)} /></p>;
    case 'h':
      return <h2><RichText text={L(block.text)} /></h2>;
    case 'steps':
      return (
        <ol className="steps">
          {block.items.map((it, i) => <li key={i}><RichText text={L(it)} /></li>)}
        </ol>
      );
    case 'list':
      return (
        <ul>
          {block.items.map((it, i) => <li key={i}><RichText text={L(it)} /></li>)}
        </ul>
      );
    case 'warning':
      return <aside className="warning" role="note"><RichText text={L(block.text)} /></aside>;
    case 'sketch':
      return (
        <figure>
          <Sketch id={block.sketch} label={L(block.caption)} />
          <figcaption>{L(block.caption)}</figcaption>
        </figure>
      );
    case 'source':
      // Sources are shown as text, not live links: the app is offline, and the URL
      // is there so a reader can check it later from any connected device.
      return (
        <p className="source">
          Source: {block.title}, {block.publisher}
          {block.url && <><br /><span className="source-url">{block.url}</span></>}
        </p>
      );
  }
}
