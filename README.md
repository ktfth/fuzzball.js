[![Build Status](https://travis-ci.org/nol13/fuzzball.js.svg?branch=master)](https://travis-ci.org/nol13/fuzzball.js)

Fuzzball.js
==========

Easy to use and powerful fuzzy string matching. 

This is (mostly) a JavaScript port of the [fuzzywuzzy](https://github.com/seatgeek/fuzzywuzzy) Python library. Uses [leven](https://github.com/sindresorhus/leven) for distance calculations. (slightly modified, see below)

Try it out on [runkit](https://runkit.com/npm/fuzzball)!


# Installation

**Using NPM**

    npm install fuzzball

**Browser** (using pre-built standalone version)

```html
<script src="fuzzball_browser.min.js"></script>
<script>
var fuzz = require('fuzzball');
</script>
```
You can use the file __fuzzball_lite_browser.min.js__ instead if you don't need the partial ratios. This version is optimized for a smaller file size (20kB vs. 80kB) but doesn't include the partial ratios which require difflib or any alternative algorithms.

# Usage

```js
var fuzz = require('fuzzball');
fuzz.ratio("hello world", "hiyyo wyrld");
        64
```

**Simple Ratio**

```js
fuzz.ratio("this is a test", "this is a test!"); // "!" stripped in pre-processing by default
        100
```

**Partial Ratio** 

Highest scoring substring of the longer string vs. the shorter string.

```js
fuzz.partial_ratio("this is a test", "this is a test again!"); //still 100, substring of 2nd is a perfect match of the first
        100
```

**Token Sort Ratio**

Tokenized, sorted, and then recombined before scoring.
```js
fuzz.ratio("fuzzy wuzzy was a bear", "wuzzy fuzzy was a bear");
        91
fuzz.token_sort_ratio("fuzzy wuzzy was a bear", "wuzzy fuzzy was a bear");
        100
```

**Token Set Ratio** 

Highest of 3 scores comparing the set intersection, intersection + difference 1 to 2, and intersection + difference 2 to 1.
```js
fuzz.token_sort_ratio("fuzzy was a bear", "fuzzy fuzzy was a bear");
        84
fuzz.token_set_ratio("fuzzy was a bear", "fuzzy fuzzy was a bear"); 
        100
```

**Distance**

Unmodified Levenshtein distance without any additional ratio calculations (for Damerau–Levenshtein use fuzz.damlev)
```js
fuzz.distance("fuzzy was a bear", "fozzy was a bear");
        1
```

**Other Scoring Options**

  * partial_token_set_ratio
  * partial_token_sort_ratio
  * WRatio
(WRatio is weighted based on relative string length, runs tests based on relative length and returns top score)

Blog post with overview of scoring algorithms can be found [**here**](http://chairnerd.seatgeek.com/fuzzywuzzy-fuzzy-string-matching-in-python/).

### Pre-Processing

Pre-processing run by default unless options.full_process is set to false.
```js
// eh, don't need to clean it up..
var options = {full_process: false}; //non-alphanumeric will not be converted to whitespace if false, default true
fuzz.ratio("this is a test", "this is a test!", options);
        97
```

Or run separately.. (say if searching a long list repeatedly, can avoid some performance overhead)
```js
fuzz.full_process("myt^eXt!");
        myt ext
```

### International (a.k.a. non-ascii)

```js
// currently full_process must be set to false if useCollator is true
// or non-roman alphanumeric will be removed (got a good locale-specific alphanumeric check in js?)
var options = {full_process: false, useCollator: true};
fuzz.ratio("this is ä test", "this is a test", options);
        100
```

### Batch Extract (search list of choices for top results)

**Simple:** array of strings, or object in form of {key: "string"}

With array of strings
```js
var query = "polar bear";
var choices = ["brown bear", "polar bear", "koala bear"];

var results = fuzz.extract(query, choices);

// [choice, score, index]
[ [ 'polar bear', 100, 1 ],
  [ 'koala bear', 80, 2 ],
  [ 'brown bear', 60, 0 ] ]
```

With object
```js
var query = "polar bear";
var choicesObj = {id1: "brown bear", id2: "polar bear", id3: "koala bear"};

var results = fuzz.extract(query, choicesObj);

// [choice, score, key]
[ [ 'polar bear', 100, 'id2' ],
  [ 'koala bear', 80, 'id3' ],
  [ 'brown bear', 60, 'id1' ] ]

```

**Less simple:** array of objects, or object in form of {key: choice}, with processor function + options

Processor function takes a choice and returns the string which will be used for scoring. Each choice can be a string or an object, as long as the processor function can accept it and return a string. Default scorer is ratio.
```js
var query = "126abzx";
var choices = [{id: 345, modelnumber: "123abc"},{id: 346, modelnumber: "123efg"},{id: 347, modelnumber: "456abdzx"}];
var options = {
        scorer: fuzz.partial_ratio, // any function that takes two strings and returns a score
        processor: function(choice) {return choice['modelnumber']},  //takes choice object, returns string
        limit: 2, // max number of results, default: no limit
        cutoff: 50 // lowest score to return, default: 0
};

var results = fuzz.extract(query, choices, options);

// [choice, score, index/key]
[ [ { id: 347, modelnumber: '456abdzx' }, 71, 2 ],
  [ { id: 345, modelnumber: '123abc' }, 67, 0 ] ]

```

The processor function will only run on choices, so if your processor function modifies text in any way be sure to do the same to your query for unbiased results. This and default scorer are a slight departure from current fuzzywuzzy behavior. 

Possibly will have better built-in support for scoring across multiple fields in the future, but can do stuff like..

```js
var processor = function(choice) { return choice['field1'] + " " + choice['field2']; }
```


### Performance Optimization

If you have a large list of terms that you're searching repeatedly, and you need to boost performance, can do some of the processing beforehand. For all scorers you can run full_process() on all of the choices beforehand, and then set options.full_process to false. 

If using either "token_sort" scorer, you can set the property "proc_sorted" of each choice object and it will use that instead of running process_and_sort() again. (Will need to make sure each choice is an object, even if just "choice = new String(choice)")

```js
var query = fuzz.full_process("126-Abzx");
var choices = [{id: 345, modelnumber: "123-abc"},{id: 346, modelnumber: "efg-123"},{id: 347, modelnumber: "456 abdzx"}];
for (var c in choices) {
        choices[c].proc_sorted = fuzz.process_and_sort(fuzz.full_process(choices[c].modelnumber));
}
var options = {
        scorer: fuzz.token_sort_ratio,
        processor: function(choice) {return choice['modelnumber']}, //choice.proc_sorted will override this
        full_process: false
};
var results = fuzz.extract(query, choices, options);
```

If using either "token_set" scorer, you can set the property "tokens" of each choice object and it will use that instead of running unique_tokens() again. (Will need to make sure each choice is an object, even if just "choice = new String(choice)")

```js
var query = fuzz.full_process("126-Abzx");
var choices = [{id: 345, modelnumber: "123-abc"},{id: 346, modelnumber: "efg-123"},{id: 347, modelnumber: "456 abdzx"}];
for (var c in choices) {
        choices[c].tokens = fuzz.unique_tokens(fuzz.full_process(choices[c].modelnumber));
}
var options = {
        scorer: fuzz.token_set_ratio,
        processor: function(choice) {return choice['modelnumber']}, //choice.tokens will override this
        full_process: false
};
var results = fuzz.extract(query, choices, options);
```

If just using the basic ratio still not fast enough.. there are some nice bk-tree packages, but don't think the set/sort algorithms satisfy all of the assumptions for using that.(?)


### Alternate Ratio Calculations


If you want to use difflib's ratio function for all ratio calculations, which differs slightly from the default python-Levenshtein style behavior, you can specify options.ratio_alg = "difflib". The difflib calculation is a bit different in that it's based on matching characters rather than true minimum edit distance, but the results are usually pretty similar. See the documentation of the relevant project for details. This mirrors the behavior of fuzzywuzzy when not using python-Levenshtein.

Except when using difflib, the ratios are calculated as ((str1.length + str2.length) - distance) / (str1.length + str2.length).

The default behavior, following the behavior of In python-Levenshtein the substitution cost is set to 2 when calculating ratios, which I follow with a small modification to leven's distance algorithm, however the fuzz.distance function still uses a cost of 1 by default. You can override either by passing in an options.subcost, though it my not be a good idea. (bolted on a bit of the collator code from fast-levenshtein into leven as well) For the other options below distance is doubled in the formula above.

To use [damlev's](https://github.com/WatchBeam/damlev) Damerau–Levenshtein distance implementaion use: options.ratio_alg = "damlev".
(also exposed directly for convenience: fuzz.damlev("string1", "string2"); )

You may also try out the sift3 or sift4 algorithms from mailcheck [described here](https://siderite.blogspot.com/2014/11/super-fast-and-accurate-string-distance.html)
These are very fast algorithms that sometimes give "good enough" results. Set options.ratio_alg to "sift3" or "sift4" accodingly. Also may optionally specify options.maxOffset if using either of these. Still testing these, but would only recommend at this time if performance is more important than accuracy.

Setting options.useCollator only works at this time if using the default algorithm.
