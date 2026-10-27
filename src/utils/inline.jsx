import React from "react";
import { Link } from "react-router-dom";
import { COLORS } from "../theme.js";

// Prosty parser linków [tekst](/ścieżka) — treść poradników trzyma linki
// wewnętrzne jako zwykły tekst, a tu zamieniamy je na <Link> (SPA).
export function renderInline(text) {
  const parts = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m;
  let i = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const href = m[2];
    const linkStyle = { color: COLORS.accent, fontWeight: 600, textDecoration: "underline" };
    parts.push(
      href.startsWith("/#") ? (
        <a key={i++} href={href} style={linkStyle}>{m[1]}</a>
      ) : (
        <Link key={i++} to={href} style={linkStyle}>{m[1]}</Link>
      )
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

// Ten sam tekst bez znaczników linków — do danych strukturalnych.
export function stripInline(text) {
  return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1");
}

