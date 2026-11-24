import { businessTypes } from "@/lib/data";

export default function BusinessTypesMarquee() {
  const items = [...businessTypes, ...businessTypes];

  return (
    <section className="biz-marquee" aria-label="Types de commerces">
      <div className="biz-marquee-fade biz-marquee-fade-left" aria-hidden />
      <div className="biz-marquee-fade biz-marquee-fade-right" aria-hidden />
      <div className="biz-marquee-track">
        <ul className="biz-marquee-list">
          {items.map((type, i) => (
            <li key={`${type}-${i}`} className="biz-marquee-item">
              <span className="biz-marquee-dot" aria-hidden />
              <span>{type}</span>
            </li>
          ))}
        </ul>
        <ul className="biz-marquee-list" aria-hidden>
          {items.map((type, i) => (
            <li key={`${type}-dup-${i}`} className="biz-marquee-item">
              <span className="biz-marquee-dot" aria-hidden />
              <span>{type}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
