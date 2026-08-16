import Image from "next/image";
import { MetaItem } from "./MetaItem";
import { StarRating } from "./StarRating";
import { Button } from "./Button";

/* Expedition listing card: headline + price, hairline meta rows, rating,
   a full-width action, and a paired image. */
export function ExpeditionCard({
  title,
  price,
  location,
  dateRange,
  guests,
  trust,
  rating = 5,
  image,
  imageAlt = "",
  imageSide = "right",
  onExplore,
  cta = "Explore Expedition",
  style = {},
  ...rest
}) {
  const imageBlock = (
    <div className="k-card-img" style={{ position: "relative", borderRadius: "var(--radius-media)", overflow: "hidden", background: "var(--ink-700)", aspectRatio: "4 / 3" }}>
      {image
        ? <Image src={image} alt={imageAlt} fill sizes="(max-width: 760px) 100vw, 45vw" placeholder="blur" style={{ objectFit: "cover" }} />
        : <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", color: "var(--text-faint)", border: "1px dashed var(--line-strong)", borderRadius: "var(--radius-media)", fontFamily: "var(--font-text)", fontSize: "var(--fs-small)", textAlign: "center", padding: "12px" }}>Expedition image</div>}
    </div>
  );

  const textBlock = (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <h3 style={{
        margin: 0, fontFamily: "var(--font-display)", fontWeight: "var(--fw-semibold)",
        fontSize: "var(--fs-h2)", lineHeight: "var(--lh-snug)", letterSpacing: "var(--ls-heading)",
        color: "var(--text-strong)", textWrap: "balance",
      }}>{title}</h3>

      {price ? (
        <div style={{ marginTop: "14px", fontFamily: "var(--font-text)", color: "var(--text-muted)", fontSize: "var(--fs-body)" }}>
          from <span style={{ color: "var(--text-strong)", fontWeight: "var(--fw-bold)", fontSize: "1.25rem" }}>{price}</span>
        </div>
      ) : null}

      <div style={{ marginTop: "auto", paddingTop: "28px" }}>
        {location ? <MetaItem icon="map-pin">{location}</MetaItem> : null}
        {dateRange ? <MetaItem icon="calendar">{dateRange}</MetaItem> : null}
        {guests ? <MetaItem icon="users">{guests}</MetaItem> : null}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid var(--line-hair)" }}>
          <span style={{ fontFamily: "var(--font-text)", fontSize: "var(--fs-small)", color: "var(--text-body)" }}>
            {trust ? <><span style={{ color: "var(--text-strong)" }}>{trust}</span> travellers hosted</> : "Small-group departures"}
          </span>
          <StarRating value={rating} />
        </div>
      </div>

      <div style={{ marginTop: "22px" }}>
        <Button variant="outline" block trailingIcon="bookmark" onClick={onExplore}>{cta}</Button>
      </div>
    </div>
  );

  return (
    <article className="k-card" style={style} {...rest}>
      {imageSide === "left" ? <>{imageBlock}{textBlock}</> : <>{textBlock}{imageBlock}</>}
    </article>
  );
}
