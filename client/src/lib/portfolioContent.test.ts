import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const homeSource = readFileSync(
  fileURLToPath(new URL("../pages/Home.tsx", import.meta.url)),
  "utf8",
);

describe("Clinton Otieno portfolio content", () => {
  it("uses verified identity and fintech profile details", () => {
    expect(homeSource).toContain("Clinton Otieno");
    expect(homeSource).toContain("Experteye Solution Limited");
    expect(homeSource).toContain("high-risk fintech verticals");
    expect(homeSource).toContain("clintonotieno23@gmail.com");
  });

  it("uses the enhanced portrait asset", () => {
    expect(homeSource).toContain('assetUrl("images/clinton-otieno-portrait.webp")');
    expect(homeSource).not.toContain("/manus-storage/");
    expect(homeSource).not.toContain("nadia-okafor-portrait");
  });
});
