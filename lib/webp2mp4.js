const _0x4019b4 = _0x19de;
function _0x19de(_0x356331, _0x565e73) {
  const _0x2e492b = _0x2e49();
  return (
    (_0x19de = function (_0x19dec8, _0x4a9435) {
      _0x19dec8 = _0x19dec8 - 0x163;
      let _0x3faa8d = _0x2e492b[_0x19dec8];
      return _0x3faa8d;
    }),
    _0x19de(_0x356331, _0x565e73)
  );
}
(function (_0x4c6336, _0x4be3dc) {
  const _0x3547bf = _0x19de,
    _0x3b05e5 = _0x4c6336();
  while (!![]) {
    try {
      const _0x558003 =
        parseInt(_0x3547bf(0x16d)) / 0x1 +
        parseInt(_0x3547bf(0x17a)) / 0x2 +
        parseInt(_0x3547bf(0x179)) / 0x3 +
        parseInt(_0x3547bf(0x17b)) / 0x4 +
        (parseInt(_0x3547bf(0x18a)) / 0x5) *
          (parseInt(_0x3547bf(0x18b)) / 0x6) +
        -parseInt(_0x3547bf(0x169)) / 0x7 +
        (parseInt(_0x3547bf(0x175)) / 0x8) *
          (-parseInt(_0x3547bf(0x18e)) / 0x9);
      if (_0x558003 === _0x4be3dc) break;
      else _0x3b05e5["push"](_0x3b05e5["shift"]());
    } catch (_0x1de8f0) {
      _0x3b05e5["push"](_0x3b05e5["shift"]());
    }
  }
})(_0x2e49, 0xda6b5);
const axios = require(_0x4019b4(0x182)),
  cheerio = require(_0x4019b4(0x171)),
  Form = require(_0x4019b4(0x16a));
async function webp2png(_0x15c0ab) {
  return new Promise(async (_0x265159, _0x2fa2bf) => {
    const _0xd704ed = _0x19de;
    try {
      let _0x5d0d77 =
        typeof _0x15c0ab === _0xd704ed(0x165) &&
        /https?:\/\//[_0xd704ed(0x180)](_0x15c0ab);
      const _0x2f3e0d = new Form();
      _0x2f3e0d["append"](_0xd704ed(0x184), _0x5d0d77 ? _0x15c0ab : ""),
        _0x2f3e0d[_0xd704ed(0x174)](
          _0xd704ed(0x17e),
          _0x5d0d77 ? "" : _0x15c0ab,
          _0xd704ed(0x18c)
        );
      let { data: _0x4027bd } = await axios({
        url: _0xd704ed(0x16b),
        method: _0xd704ed(0x16c),
        data: _0x2f3e0d,
        headers: {
          "Content-Type":
            "multipart/form-data;\x20boundary=" + _0x2f3e0d[_0xd704ed(0x176)],
        },
      });
      const _0x41fe4c = new Form(),
        _0x574740 = cheerio[_0xd704ed(0x188)](_0x4027bd),
        _0x2820f9 = _0x574740(_0xd704ed(0x186))[_0xd704ed(0x17d)](
          _0xd704ed(0x185)
        );
      _0x41fe4c[_0xd704ed(0x174)](_0xd704ed(0x177), _0x2820f9),
        _0x41fe4c["append"](_0xd704ed(0x167), "90"),
        _0x41fe4c["append"](_0xd704ed(0x163), "90"),
        _0x41fe4c[_0xd704ed(0x174)]("background", _0xd704ed(0x183)),
        _0x41fe4c[_0xd704ed(0x174)](_0xd704ed(0x187), _0xd704ed(0x183)),
        _0x41fe4c[_0xd704ed(0x174)](_0xd704ed(0x16f), _0xd704ed(0x16e));
      let _0x41de2f = await axios({
        method: _0xd704ed(0x16c),
        url: _0xd704ed(0x170) + _0x2820f9 + _0xd704ed(0x166),
        data: _0x41fe4c,
        headers: { "Content-Type": _0xd704ed(0x18f) + _0x41fe4c["_boundary"] },
      });
      const _0x407d55 = cheerio[_0xd704ed(0x188)](_0x41de2f["data"]),
        _0x3c60f7 =
          "https:" +
          _0x407d55(_0xd704ed(0x18d))[_0xd704ed(0x17d)](_0xd704ed(0x168));
      _0x265159(_0x3c60f7);
    } catch (_0x5e4c20) {
      _0x265159("Error");
    }
  });
}
async function webp2mp4(_0x5657b5) {
  return new Promise(async (_0x54d564, _0x129948) => {
    const _0xb027 = _0x19de;
    try {
      let _0x5ed0e8 =
        typeof _0x5657b5 === "string" &&
        /https?:\/\//[_0xb027(0x180)](_0x5657b5);
      const _0x69a5d5 = new Form();
      _0x69a5d5[_0xb027(0x174)]("new-image-url", _0x5ed0e8 ? _0x5657b5 : ""),
        _0x69a5d5["append"](
          "new-image",
          _0x5ed0e8 ? "" : _0x5657b5,
          _0xb027(0x18c)
        );
      let { data: _0x55de68 } = await axios({
        url: _0xb027(0x17f),
        method: _0xb027(0x16c),
        data: _0x69a5d5,
        headers: { "Content-Type": _0xb027(0x18f) + _0x69a5d5[_0xb027(0x176)] },
      });
      const _0x4bcb69 = new Form(),
        _0x26e177 = cheerio[_0xb027(0x188)](_0x55de68),
        _0x34d49b = _0x26e177(_0xb027(0x186))[_0xb027(0x17d)](_0xb027(0x185));
      _0x4bcb69[_0xb027(0x174)](_0xb027(0x177), _0x34d49b),
        _0x4bcb69[_0xb027(0x174)]("percentage", "90"),
        _0x4bcb69[_0xb027(0x174)](_0xb027(0x163), "90"),
        _0x4bcb69["append"](_0xb027(0x172), _0xb027(0x183)),
        _0x4bcb69[_0xb027(0x174)](_0xb027(0x187), _0xb027(0x183)),
        _0x4bcb69[_0xb027(0x174)](_0xb027(0x16f), _0xb027(0x16e));
      let _0x2453c3 = await axios({
        method: _0xb027(0x16c),
        url: _0xb027(0x189) + _0x34d49b + "?ajax=true",
        data: _0x4bcb69,
        headers: { "Content-Type": _0xb027(0x18f) + _0x4bcb69[_0xb027(0x176)] },
      });
      const _0x57395c = cheerio["load"](_0x2453c3[_0xb027(0x181)]),
        _0x5a17f1 =
          _0xb027(0x173) +
          _0x57395c(_0xb027(0x164))[_0xb027(0x17d)](_0xb027(0x168));
      _0x54d564(_0x5a17f1);
    } catch (_0x534fd9) {
      _0x54d564(_0xb027(0x17c));
    }
  });
}
function _0x2e49() {
  const _0xdb55c9 = [
    "2708272riRNLS",
    "Error",
    "attr",
    "new-image",
    "https://ezgif.com/webp-to-mp4",
    "test",
    "data",
    "axios",
    "#ffffff",
    "new-image-url",
    "value",
    "input[name=\x22file\x22]",
    "backgroundc",
    "load",
    "https://ezgif.com/webp-to-mp4/",
    "15ChpJLg",
    "126774LKWJTF",
    "image.webp",
    ".outfile\x20img",
    "74583bNzWNY",
    "multipart/form-data;\x20boundary=",
    "percentager",
    ".outfile\x20video\x20>\x20source",
    "string",
    "?ajax=true",
    "percentage",
    "src",
    "9559466apcXlt",
    "form-data",
    "https://ezgif.com/webp-to-jpg",
    "post",
    "825868bKwSUZ",
    "true",
    "ajax",
    "https://ezgif.com/webp-to-jpg/",
    "cheerio",
    "background",
    "https:",
    "append",
    "1600EsaXeE",
    "_boundary",
    "file",
    "exports",
    "2966199KmxRrE",
    "2725254MukVIi",
  ];
  _0x2e49 = function () {
    return _0xdb55c9;
  };
  return _0x2e49();
}
module[_0x4019b4(0x178)] = { webp2png: webp2png, webp2mp4: webp2mp4 };
