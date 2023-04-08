import { GetStaticPaths, GetStaticProps } from "next";
import { useState } from "react";
import AdminPanel from "../../../../components/AdminPanel";
import {
  posMap,
  wordType,
  diacriticMap,
  Word,
} from "../../../../lib/langsHelpers";
import { getLexicon } from "../../../../lib/libFirebase";
import { firebaseStorage } from "../../../_app";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const language = params!.langid;
  const lexicon = await getLexicon(firebaseStorage, language as string);
  return { props: { language, lexicon } };
};

export const getStaticPaths: GetStaticPaths<{ langid: string }> = async () => {
  return {
    paths: [{ params: { langid: "fasil" } }],
    fallback: "blocking",
  };
};

export default function LexiconPage({
  language,
  lexicon,
}: {
  language: string;
  lexicon: { [x: string]: Word };
}) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const [search, setSearch] = useState("");
  const [posFilter, setPos] = useState<wordType>("");
  const [def, setDef] = useState("");

  function copyText() {
    const text = Object.getOwnPropertyNames(lexicon)
      .sort((a, b) => {
        let x = Object.keys(diacriticMap).includes(a)
          ? diacriticMap[a as keyof typeof diacriticMap]
          : a.toLowerCase();
        let y = Object.keys(diacriticMap).includes(b)
          ? diacriticMap[b as keyof typeof diacriticMap]
          : b.toLowerCase();
        return x.localeCompare(y);
      })
      // Filter to correct part of speech
      .filter((x: string) =>
        posFilter == "" ? true : lexicon[x].type == (posFilter as string)
      )
      // Filter to search (Fasil)
      .filter((x: string) =>
        search == ""
          ? true
          : x
              .split("")
              .map((c: string) =>
                Object.keys(diacriticMap).includes(c)
                  ? diacriticMap[c as keyof typeof diacriticMap]
                  : c
              )
              .join("")
              .startsWith(search)
      )
      // Filter to search (English definition)
      .filter((x: string) =>
        def == ""
          ? true
          : lexicon[x].definition.some((a: string) => a.match(def) != null) ||
            (lexicon[x].derivations
              ? Object.getOwnPropertyNames(lexicon[x].derivations)
                  .map((y: string) =>
                    lexicon[x].derivations![y]!.definition.some(
                      (b: string) => b.match(def) != null
                    )
                  )
                  .some((z) => z)
              : false)
      )
      .map(
        (x: string) =>
          `\t${x}${"\t".repeat(4 - (x.length + 1) / 4)}- ${
            lexicon[x].type
          }. ${"\t".repeat(2 - (lexicon[x].type.length + 1) / 4)}- ${lexicon[
            x
          ].definition.join("; ")}`
      )
      .join("\n");
    navigator.clipboard.writeText(text);
  }

  function buildExpandedWord(x: string, word: Word) {
    if (
      word.derivations &&
      Object.getOwnPropertyNames(word.derivations).length > 0
    ) {
      if (expandedItems.has(x)) {
        return (
          <span
            style={{ position: "absolute", left: "-2rem" }}
            onClick={() =>
              setExpandedItems((s: Set<string>) => {
                s.delete(x);
                return new Set(s);
              })
            }
          >
            ▼
          </span>
        );
      } else {
        return (
          <span
            style={{ position: "absolute", left: "-2rem" }}
            onClick={() =>
              setExpandedItems((s: Set<string>) => {
                s.add(x);
                return new Set(s);
              })
            }
          >
            ᐅ
          </span>
        );
      }
    }
  }

  function buildWord(
    x: string,
    word: Word,
    indent?: boolean
  ): React.ReactElement {
    return (
      <>
        <p
          style={{
            position: "relative",
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: "1.2rem",
            height: "min-content",
            width: "min-content",
          }}
        >
          {buildExpandedWord(x, word)}
          <span
            style={{
              position: "absolute",
              width: "max-content",
              left: indent ? "2rem" : "0rem",
              display: "inline-block",
              fontFamily: language.charAt(0).toUpperCase() + language.slice(1),
              fontSize: "16px",
            }}
          >
            {x.toLowerCase().split("").reverse().join("")}
          </span>
          <span
            style={{
              position: "absolute",
              width: "max-content",
              left: indent ? "8rem" : "6rem",
              display: "inline-block",
            }}
          >
            {lexicon[x].pronunciation
              ? "/" + lexicon[x].pronunciation + "/"
              : x}
          </span>
          <span
            style={{
              position: "absolute",
              left: "12rem",
              fontStyle: "italic",
              width: "max-content",
              display: "inline-block",
            }}
          >
            - {word.type}.
          </span>
          <span
            style={{
              position: "absolute",
              left: "15.5rem",
              display: "inline-block",
              paddingBottom: "1rem",
              width: "max-content",
              wordBreak: "break-all",
            }}
          >
            - {word.definition.join("; ")}
          </span>
        </p>
        {expandedItems.has(x) ? (
          Object.getOwnPropertyNames(word.derivations!).map((w: string) =>
            buildWord(w, word.derivations![w], true)
          )
        ) : (
          <></>
        )}
      </>
    );
  }

  function buildLexiconList() {
    return (
      <>
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            maxWidth: "36rem",
            margin: "1rem auto 1rem",
          }}
        >
          {Object.getOwnPropertyNames(lexicon)
            .sort((a, b) => {
              let x = Object.keys(diacriticMap).includes(a)
                ? diacriticMap[a as keyof typeof diacriticMap]
                : a.toLowerCase();
              let y = Object.keys(diacriticMap).includes(b)
                ? diacriticMap[b as keyof typeof diacriticMap]
                : b.toLowerCase();
              return x.localeCompare(y);
            })
            // Filter to correct part of speech
            .filter((x: string) =>
              posFilter == "" ? true : lexicon[x].type == (posFilter as string)
            )
            // Filter to search (Fasil)
            .filter((x: string) =>
              search == ""
                ? true
                : x
                    .split("")
                    .map((c: string) =>
                      Object.keys(diacriticMap).includes(c)
                        ? diacriticMap[c as keyof typeof diacriticMap]
                        : c
                    )
                    .join("")
                    .startsWith(search)
            )
            // Filter to search (English definition)
            .filter((x: string) =>
              def == ""
                ? true
                : lexicon[x].definition.some(
                    (a: string) => a.match(def) != null
                  ) ||
                  (lexicon[x].derivations
                    ? Object.getOwnPropertyNames(lexicon[x].derivations)
                        .map((y: string) =>
                          lexicon[x].derivations![y].definition!.some(
                            (b: string) => b.match(def) != null
                          )
                        )
                        .some((z) => z)
                    : false)
            )
            .map((x: string) => buildWord(x, lexicon[x]))}
        </div>
      </>
    );
  }

  function buildFilterBar() {
    return (
      <p>
        <input
          style={{ marginRight: "1rem" }}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
        <select
          style={{ marginRight: "1rem" }}
          value={posFilter}
          onChange={(e) => setPos(e.currentTarget.value as wordType)}
        >
          {Object.getOwnPropertyNames(posMap).map((x: string, i) => (
            <option value={posMap[x as keyof typeof posMap]} key={i}>
              {x}
            </option>
          ))}
        </select>
        <input
          style={{ marginRight: "1rem" }}
          type="text"
          value={def}
          onChange={(e) => setDef(e.currentTarget.value)}
        />
        <button
          onClick={() => {
            if (expandedItems.keys().next().value) {
              setExpandedItems(new Set());
            } else {
              console.log("empty");
              setExpandedItems(
                new Set(
                  Object.getOwnPropertyNames(lexicon).filter(
                    (x: string) =>
                      lexicon[x].derivations &&
                      Object.getOwnPropertyNames(lexicon[x].derivations)
                        .length > 0
                  )
                )
              );
            }
          }}
        >
          ▶
        </button>
        <button
          onClick={() => {
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: "smooth",
            });
          }}
        >
          ᐯ
        </button>
      </p>
    );
  }

  return (
    <>
      <h1>
        {language
          .split("")
          .map((x: string, i: number) => (i == 0 ? x.toUpperCase() : x))
          .join("")}{" "}
        Lexicon
      </h1>
      {buildFilterBar()}
      {buildLexiconList()}
      <AdminPanel
        language={language}
        copyText={copyText}
        size={Object.getOwnPropertyNames(lexicon).length}
        lexicon={lexicon}
      />
    </>
  );
}
