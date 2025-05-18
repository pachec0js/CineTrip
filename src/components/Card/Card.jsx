import Link from 'next/link';
import './Card.css';

export default function Card({ item, tipo }) {
  let mediaType = item.media_type || tipo;
  let rota = '#';

  if (mediaType === 'movie') {
    rota = `/filme/${item.id}`;
  } else if (mediaType === 'tv') {
    rota = `/serie/${item.id}`;
  }

  const play = [
    122, 232, 272, 451, 529, 671, 688, 840, 2710, 5912, 99861, 299534, 343611,
    497698, 567189, 974576, 1124620, 877817,
  ];

  const indica = [
    110, 264, 1396, 1399, 1412, 1644, 2316, 4952, 11536, 20573, 42009, 47326,
    62134, 66729, 78029, 85271, 119051, 299536,
  ];

  const oscar = [
    76341, 109424, 123464, 168259, 190859, 205596, 266856, 273895, 284054,
    286217, 346698, 419430, 424694, 438631, 466420, 475557, 515001, 646385,
    703745, 706972, 765869,
  ];

  const hype = [100088, 696506, 950387, 986056, 993710, 634649];

  const ganhadores = [
    73, 103, 141, 1246, 1422, 12405, 14160, 24428, 76203, 103663, 194662,
    314365, 376867, 399055, 490132, 545611, 581734, 776503, 872585, 1064213,
    1000837,
  ];

  let tag = null;

  if (play.includes(item.id)) {
    tag = <img src="/tags/tagPlay.png" className="tag-img" />;
  } else if (indica.includes(item.id)) {
    tag = <img src="/tags/tagIndica.png" className="tag-img" />;
  } else if (oscar.includes(item.id)) {
    tag = <img src="/tags/tagOscar.png" className="tag-img" />;
  } else if (hype.includes(item.id)) {
    tag = <img src="/tags/tagHype.png" className="tag-img" />;
  } else if (ganhadores.includes(item.id)) {
    tag = <img src="/tags/tagWinner.png" className="tag-img-oscar" />;
  }

  return (
    <Link href={rota}>
      <div className="movie-card">
        {tag}
        <img
          src={`https://image.tmdb.org/t/p/w780${item.poster_path}`}
          className="poster-image"
          loading="lazy"
        />
      </div>
    </Link>
  );
}
