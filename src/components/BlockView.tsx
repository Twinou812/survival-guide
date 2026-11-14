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
      // Anchor ids are prefixed so they can't clash with app ids. Scrolling is done
      // in code (see SectionPage), because the URL hash is used by the router.
      return <h2 id={`h-${block.id}`} tabIndex={-1}><RichText text={L(block.text)} /></h2>;
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
    case 'table':
      return (
        <div className="table-wrap" role="region" aria-label={L(block.caption)} tabIndex={0}>
          <table>
            <caption>{L(block.caption)}</caption>
            <thead>
              <tr>{block.head.map((c, i) => <th key={i} scope="col"><RichText text={L(c)} /></th>)}</tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r}>
                  {row.map((c, i) =>
                    i === 0
                      ? <th key={i} scope="row"><RichText text={L(c)} /></th>
                      : <td key={i}><RichText text={L(c)} /></td>,
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
