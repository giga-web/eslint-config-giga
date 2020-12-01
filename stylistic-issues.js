/**
 * "off" 或 0 - 关闭规则
 * "warn" 或 1 - 打开规则，作为警告（不会影响退出代码）
 * "error" 或 2 - 打开规则，作为错误（退出代码将为1）
 */
module.exports = {

  rules: {
    // --fix 设置数组的开始括号后和结束括号前是否需要强制换行。注意：这个规则不控制数组元素是否换行，只控制括号和元素之间是否有换行。
    // 开始括号后有换行，自动修复结束括号前也有换行。开始括号后没有换行，自动修复结束括号前也没有换行。
    "array-bracket-newline": ["error", "consistent"],

    // --fix 设置数组的开始括号后和结束括号前是否需要空格。注意：这个规则不控制数组元素之间是否需要空格，只控制括号和元素之间是否需要空格。
    // 数组的开始括号后和结束括号前禁止空格
    "array-bracket-spacing": ["error", "never", {
      // 在包含单个元素的数组字面量内不需要空格
      "singleValue": false,
      // 在数组字面量和对象字面量元素之间不需要空格 [{ 或 }]
      "objectsInArrays": false,
      // 在数组字面量和数组字面量元素之间不需要空格 [[ 或 ]]
      "arraysInArrays": false,
    }],

    // --fix 设置数组元素之间是否强制换行
    "array-element-newline": ["error", {
      // 如果元素内部有换行符，自动修复未全部需要换行符
      "multiline": true,
      // 元素个数达到 5 个时，自动修复为换行。元素个数未达到 5 个时，自动修复为不换行。
      "minItems": 5,
    }],

    // --fix 如果代码块开始/结束标记大括号和代码块的部分代码在同一行，可以设置它们之间是否有一个或多个空格。代码块不是对象字面量。
    // 自动修复为至少有一个空格
    "block-spacing": ["error", "always"],

    // --fix 设置代码块的支架风格，大括号是一种支架。
    // 强制使用 one true brace 风格。连续语句中只有最后块的闭合括号独占一行。连续语句有：if...else try...catch 等
    "brace-style": ["error", "1tbs", {
      // 允许块的打开和闭合括号在同一行
      "allowSingleLine": true
    }],

    // 检查变量名中间是否有下划线。
    "camelcase": ["error", {
      // 属性名强制使用驼峰风格
      "properties": "always"
    }],

    // 设置注释的第一个单词是否允许小写字母开头。
    // 第一个单词可以使用小写字母开头。
    // "capitalized-comments": ["error", "never"],

    // --fix 设置对象和数组字面量是否使用尾随逗号。
    // 当最后一项和 ] } 在不同行的时候，必须使用尾随逗号；当最后一项和 ] } 在同一行的时候，禁止使用尾随逗号
    "comma-dangle": ["error", "always-multiline"],
    
    // --fix 设置在变量声明，数组字面量，对象字面量，函数参数和序列中的逗号前后是否有空格。
    // 在逗号后必须有至少一个空格
    "comma-spacing": ["error", { "after": true }],

    // --fix 设置在数组字面量，对象字面量和变量声明中的逗号是放在开头还是放在结尾。
    // 要求在数组元素，对象属性和变量声明的同一行的末尾有逗号
    "comma-style": ["error", "last"],
    
    // --fix 设置计算属性括号内是否有空格。
    // 不允许计算属性括号内有空格
    "computed-property-spacing": ["error", "never"],
    
    // 设置 this 的别名。
    // 仅允许 this 的别名是 that
    "consistent-this": ["error", "that"],
    
    // --fix 设置文件末尾是否强制换行
    // 强制文件末尾有换行 (LF)
    "eol-last": ["error", "always"],
    
    // --fix 设置调用函数时，函数名和括号之间是否强制有一个或多个空格。
    // 不允许有一个或多个空格
    "func-call-spacing": ["error", "never"],

    // 变量/属性的值是函数的时候，设置变量名/属性名与函数名是否一致。
    // 无需一致
    "func-name-matching": ["error", "never"],

    // 设置强制或禁止使用命名函数表达式。
    // 可有可无
    "func-names": ["error", "never"],

    // 设置强制使用函数声明或函数表达式来定义函数。
    // 强制使用函数表达式，但是允许使用箭头函数
    // "func-style": ["error", "expression"],
    
    // --fix 设置函数调用时参数是否需要强制换行
    // 如果前两个参数之间有换行，则所有参数之间都要换行；如果前两个参数之间没有换行，则所有参数之间都不能换行；
    "function-call-argument-newline": ["error", "consistent"],
    
    // --fix 设置函数的开始括号后和结束括号前是否需要强制换行
    // 如果只有一个参数，允许换行也允许不换行；多个参数的时候，只要某两个参数之间有换行，则函数的开始括号后和结束括号前需要换行，并且参数之间都需要换行
    "function-paren-newline": ["error", "multiline-arguments"],

    // 设置不允许在赋值和函数定义中使用的标识符。
    // 暂不设置
    // "id-denylist": ["error", "data", "err", "e", "cb", "callback"],

    // 设置标识符允许的最小/最大的长度。
    "id-length": ["error", {
      // 最少1个字符
      "min": 1,
      // 最少30个字符
      "max": 30,
    }],

    // 要求赋值和函数定义中的标识符与指定的正则表达式匹配。
    // 暂不设置
    // "id-match": ["error", "^[a-z]+([A-Z][a-z]+)*$"]

    // --fix 设置包含隐式返回的箭头函数前是否换行
    // 禁止在函数体前换行
    "implicit-arrow-linebreak": ["error", "beside"],

    // --fix 设置缩进。默认 4 空格。
    // 设置缩进 2 个空格
    "indent": ["error", 2, {
      // 指定 switch 语句中的 case 子句的缩进级别
      "SwitchCase": 1,
    }],

    // --fix 设置 JSX 的属性是强制使用双引号，还是强制使用单引号。
    // 强制使用双引号
    "jsx-quotes": ["error", "prefer-double"],

    // --fix 设置对象字面量属性的 key 和 value 之间是否有空格。
    "key-spacing": ["error", {
      // 对象字面量中 key 和冒号之间不能有空格
      "beforeColon": false,
      // 对象字面量中冒号和 value 之间至少要有一个空格
      "afterColon": true,
      // 对象字面量中冒号和 key/value 之间限制只能有一个空格
      "mode": "strict",
      // 对象字面量中强制冒号 和 value 垂直对齐
      "align": "colon",
    }],

    // --fix 设置关键字或类关键字的前或后是否有空格。
    "keyword-spacing": ["error", {
      // 关键字的前面至少有一个空格
      "before": true,
      // 关键字的后面至少有一个空格
      "after": true,
    }],

    // 设置单行注释能够出现在代码的上面还是代码的旁边。
    // 强制单行注释出现在代码的上面
    // "line-comment-position": ["error", "above"],

    // --fix 设置使用那种风格的换行符。屏蔽不同的操作系统、不同的 VCS 版本控制系统、不同编辑器的差异。
    // 强制使用 Unix 换行符
    "linebreak-style": ["error", "unix"],

    // --fix 设置在注释之前/之后是否需要空白行。
    "lines-around-comment": ["error", {
      // 块级注释前面需要空一个行
      "beforeBlockComment": true, 
      // 块级注释后面需要空一个行
      // "afterBlockComment": true, 
      // 行级注释前面需要空一个行
      // "beforeLineComment": true, 
      // 行级注释后面需要空一个行
      // "afterLineComment": true, 
      // 允许注释出现在代码块的开头
      "allowBlockStart": true, 
      // 允许注释出现在代码块的末尾
      "allowBlockEnd": true, 
      // 允许注释出现在对象字面量的开头
      "allowObjectStart": true, 
      // 允许注释出现在对象字面量的结尾
      "allowObjectEnd": true, 
      // 允许注释出现在数组字面量的开头
      "allowArrayStart": true, 
      // 允许注释出现在数组字面量的结尾
      "allowArrayEnd": true, 
      // 允许注释出现在 class 类的开头
      "allowClassStart": true, 
      // 允许注释出现在 class 类的结尾
      "allowClassEnd": true, 
      // 启用默认被忽略的注释
      "applyDefaultIgnorePatterns": true,
    }],

    // --fix 设置类成员之间是否有空行。
    // 要求在类成员之后空一行
    "lines-between-class-members": ["error", "always", {
      // 不要求在单行类成员之后空一行，可以空也可以不空
      "exceptAfterSingleLine": true
    }],

    // 设置代码块中最大嵌套深度以减少代码复杂度。
    // 指定最大嵌套深度
    "max-depth": ["error", 4],

    // 设置一行代码最多可以有多少个 Unicode 字符。
    "max-len": ["error", {
      // 设置代码行的最大长度
      "code": 200,
      // 指定一个 tab 占用的字符宽度
      "tabWidth": 2,
      // 设置注释行的最大长度，默认和代码行的设置相同
      "comments": 200,
      // 指定忽略正则表达式。只能忽略单行，如果使用 YAML 或者 JSON 格式的配置文件，需要两次转义
      // "ignorePattern": true,
      // 忽略所有注释
      "ignoreComments": true,
      // 仅忽略尾随注释
      "ignoreTrailingComments": true,
      // 忽略包含 url 的行
      "ignoreUrls": true,
      // 忽略包含双引号或单引号的行
      "ignoreStrings": true,
      // 忽略包含模板字符串的行
      "ignoreTemplateLiterals": true,
      // 忽略包含正则表达式的行
      "ignoreRegExpLiterals": true,
    }],

    // 设置文件的最大行数，以帮助维护和降低复杂性。
    "max-lines": ["error", {
      // 设置文件的最大行数
      "max": 300,
      // 忽略纯粹由空格组成的行
      "skipBlankLines": true,
      // 忽略仅包含注释的行
      "skipComments": true,
    }],

    // 设置函数的最大行数，以帮助维护和降低复杂性。行数和语句数不一样。
    // "max-lines-per-function": ["error", {
    //   // 设置函数的最大行数
    //   "max": 50,
    //   // 忽略纯粹由空格组成的行。
    //   "skipBlankLines": true,
    //   // 忽略仅包含注释的行。
    //   "skipComments": true,
    //   // 包括 IIFE (立即调用函数表达式)中包含的代码。
    //   "IIFEs": false,
    // }],

    // 设置嵌套回调的最大深度，以提高代码的清晰度。
    "max-nested-callbacks": ["error", 10],

    // 设置函数定义中参数的最大个数。
    "max-params": ["error", 3],

    // 设置函数代码块中语句的最大数量。
    "max-statements": ["error", 20, {
      // 忽略顶层函数
      "ignoreTopLevelFunctions": true,
    }],

    // 设置每行代码中语句的最大数量。
    "max-statements-per-line": ["error", { "max": 2 }],

    // --fix 设置多行注释的风格。
    // "multiline-comment-style": ["error", "starred-block"],

    // 设置三元表达式的操作符能否被换行符隔开。
    "multiline-ternary": ["error", "never"],

    // --fix 设置构造函数的名称是否使用大写字母开头。
    "new-cap": ["error", {
      // 要求所有使用 `new` 操作符调用的函数都是大写开头的函数
      "newIsCap": true,
      // 要求所有大写开头的函数只能使用 `new` 操作符调用
      "capIsNew": false,
      // 一个字符串数组，允许指定的小写开头的函数可以被 `new` 操作符调用
      // "newIsCapExceptions",
      // 一个正则表示式，允许指定的小写开头的函数可以被 `new` 操作符调用
      // "newIsCapExceptionPattern",
      // 一个字符串数组，允许指定的大写开头的函数能够不使用 `new` 操作符调用
      // "capIsNewExceptions",
      // 一个正则表示式，允许指定的大写开头的函数能够不使用 `new` 操作符调用
      // "capIsNewExceptionPattern",
      // 检测对象属性
      "properties": true,
    }],

    // --fix 设置链式函数调用和深度成员访问时是否强制要求换行。
    "newline-per-chained-call": ["error", {
      // 指定允许链式调用不换行的深度
      "ignoreChainWithDepth": 2,
    }],

    // 启用此规则表示禁止使用 Array 构造函数。
    "no-array-constructor": ["error"],

    // 启用此规则表示禁止使用位操作符。
    "no-bitwise": ["error", {
      // 允许在 |0 模式中使用位操作符 OR 进行类型转换。
      "int32Hint": true,
    }],

    // 启用此规则表示禁止 continue 语句。
    "no-continue": ["error"],

    // 启用此规则表示禁止在代码和注释在同一行。
    // "no-inline-comments": ["error"],
    
    // --fix 启用此规则表示禁止 if 语句是 else 代码块唯一的语句。
    "no-lonely-if": ["error"],

    // 启用此规则表示检测二元表达式、逻辑表达式、条件表达式中的运算符是否存在混用的情况。
    "no-mixed-operators": ["error", {
      // 对操作符进行进行分组，同组的操作符不能混用，不同组的操作符可以混用。
      // groups 选项是一些组的列表，一个组是一些二进制操作符的列表。
      // 默认操作符组被定义为算术、位、比较、逻辑、关系运算符。
      // 注意：三元运算符 (?:) 可以属于任何组，默认情况下允许与其他运算符混合使用。
      // "groups": ,
      // 设置是否允许优先级相同的操作符混合使用。
      "allowSamePrecedence": true,
    }],

    // √ 启用此规则表示不允许混合使用空格和 tab 进行缩进。
    // 当空格用于对齐的时候允许混合使用空格和 tab
    "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],

    // 启用此规则表示禁止在单个语句中使用链式赋值。
    "no-multi-assign": ["error"],
    
    // --fix 设置最多可以连续空多少行。
    "no-multiple-empty-lines": ["error", {
      // 设置最多可以连续空多少行。
      "max": 2,
      // 设置在文件末尾最多可以连续空多少行。
      "maxEOF": 0,
      // 设置在文件开头最多可以连续空多少行。      
      "maxBOF": 0,
    }],
    
    // 启用此规则表示在有 else 分支的 if 语句中和三元表达式中不允许使用否定条件
    "no-negated-condition": ["error"],
    
    // 启用此规则表示禁止使用嵌套的三元表达式。
    "no-nested-ternary": ["error"],
    
    // 启用此规则表示禁止使用 Object 构造函数。
    "no-new-object": ["error"],

    // 启用此规则表示禁止使用一元 ++ 和 -- 运算符。
    "no-plusplus": ["error", {
      // true 表示允许在 for 循环的事后 (final expression) 使用一元 ++ 和 -- 操作符。
      "allowForLoopAfterthoughts": true,
    }],
    
    // 设置想要禁止使用的语法。
    // 值为 AST 选择器
    // "no-restricted-syntax": ["error", "FunctionExpression", "WithStatement", "BinaryExpression[operator='in']"],
    
    // 启用此规则表示禁止使用 tab
    "no-tabs": ["error", {
      // 如果设置为 true 表示 tab 可以用于缩进
      "allowIndentationTabs": true,
    }],

    // 启用此规则表示禁止使用三元运算符。
    // "no-ternary": ["error"],

    // --fix 设置是否允许在行尾有空格
    "no-trailing-spaces": ["error", {
      // 禁止在行尾有空格
      "skipBlankLines": false,
      // 禁止注释块的行尾有空格
      "ignoreComments": false,
    }],

    // 设置是否允许悬空的下划线
    "no-underscore-dangle": ["error"
      //, {
      // 指定允许使用悬空的下划线的标识符，值是一个字符串数组
      // "allow": [],
      // 不允许`this` 对象的成员后面有悬空的下划线
      // "allowAfterThis": false,
      // 不允许`super` 对象的成员后面有悬空的下划线
      // "allowAfterSuper": false,
      // 不允许 `this.constructor` 对象的成员后面有悬空的下划线
      // "allowAfterThisConstructor": false,
      // 不强制方法名称使用悬空的下划线
      // "enforceInMethodNames": false,
      // 不允许函数的参数使用悬空的下划线
      // "allowFunctionParams": false,
      // }
    ],

    // --fix 设置在能使用条件判断的时候，禁止使用了三元操作符
    "no-unneeded-ternary": ["error", {
      // 允许使用
      "defaultAssignment": true,
    }],

    // --fix 如果对象的属性在同一行上，打开此选项表示不允许访问属性的时候属性前面有空格。
    // 当对象和属性位于单独的行上时，此规则允许使用空格，因为通常在较长的属性链中添加换行符。
    "no-whitespace-before-property": ["error"],

    // --fix 设置是否强制统一单行语句出现的位置。
    // 注释在语句的上方
    "nonblock-statement-body-position": ["error", "beside"],

    // --fix 设置对象字面量和对象解构中的开始大括号后和结束大括号前是否需要强制换行
    "object-curly-newline": ["error", {
      // 只要某两个属性之间有换行，则开始大括号后和结束大括号前需要换行
      "multiline": true,
      // 默认，对象的开始大括号后和结束大括号前是否换行保持一致。要么都换行，要么都不换行。如果其中有一个不换行，自动修复为都不换行。
      "consistent": true,
      // 如果属性个数达到了指定的数量，则开始大括号后和结束大括号前需要换行，否则不需要换行。也就是说如果属性少于给定的整数但是对象包含换行符会报错，此时如果 `"consistent": true` 则不会报错。
      "minProperties": 5,
    }],

    // --fix 设置对象字面量、解构、import/export 的大括号内部是否使用空格。
    // 要求大括号内部必须有空格 (除了 {})
    "object-curly-spacing": ["error", "always", {
      // 对象大括号内的数组的括号和对象大括号相邻不需要空格
      "arraysInObjects": false,
      // 对象大括号内的对象的括号和对象大括号相邻不需要空格
      "objectsInObjects": false,
    }],

    // --fix 启用此规则表示强制每个属性都在单独的行上。
    "object-property-newline": ["error", {
      // 如果设置为 true 对象字面量的所有属性要么都在同一行，要么都在单独的行，不会自动将多行整理成一行。
      // "allowAllPropertiesOnSameLine": true,
    }],

    // --fix 设置函数(var)或块级(let const)作用域的变量声明方式是一起声明还是分开声明。
    // 允许一个作用域多个变量声明，但是连续的变量声明必须合并为一个变量声明
    // "one-var": ["error", "consecutive"],
    
    // --fix 启用此规则表示每个变量声明都需要换行。
    // 变量初始化的时候强制换行
    "one-var-declaration-per-line": ["error", "initializations"],

    // --fix 设置在可能的情况下要求或不允许简写运算符。
    // 不允许使用简写运算符
    "operator-assignment": ["error", "never"],

    // --fix 设置操作符的换行风格。
    // 要求在操作符的前面进行换行
    "operator-linebreak": ["error", "before"],

    // --fix 设置块语句的开头和结尾是否有空行。
    // 要求在块语句和 class 类的开头和结尾必须有空行
    "padded-blocks": ["error", "never", {
      // 允许单行块
      "allowSingleLineBlocks": true,
    }],

    // --fix 设置指定的 2 种语句之间是否有空白行。
    // 如果未提供任何配置，此规则将不执行任何操作。暂不提供配置。
    // "padding-line-between-statements": ["error"],

    // --fix 启用此规则表示建议使用 ** 运算符替代调用 Math.pow
    "prefer-exponentiation-operator": ["error"],

    // --fix 启用此规则表示应该使用对象展开语法作为第一个参数调用 Object.assign
    "prefer-object-spread": ["error"],

    // --fix 设置对象字面量的属性名称周围是否加引号。
    // 在一个对象中，要么所有属性都加引号，要么所有属性都不加引号
    "quote-props": ["error", "consistent"],

    // --fix 设置定义字符串的风格：双引号，单引号，反引号。
    // 要求尽可能使用单引号
    "quotes": ["error", "single", {
      // 允许字符串使用单引号或双引号，只要字符串包含必须被转义的引号即可
      "avoidEscape": true,
      // 允许字符串使用反引号
      "allowTemplateLiterals": true,
    }],


    // --fix 设置是否强制使用分号作为语句的结尾。
    // 要求使用分号作为语句的结尾
    "semi": ["error", "always", {
      // 当大括号在同一行的时候，忽略块中的最后一个分号。
      "omitLastInOneLineBlock": true
    }],

    // --fix 设置分号前或分号前后是否需要空格。
    "semi-spacing": ["error", {
      // 要求分号之前必须有空格
      "before": false,
      // 要求分号之后必须有空格
      "after": true,
    }],

    // --fix 设置分号是出现在语句的开头还是结尾。
    // 强制分号在语句的结尾
    "semi-style": ["error", "last"],

    // 设置是否根据对象表达式中定义的属性名称的第一个字符按照字母顺序进行属性排序。
    // 强制属性按升序排列
    // "sort-keys": ["error", "asc", {
    //   // 强制属性按大小写排列，大写排前
    //   "caseSensitive": true,
    //   // 指定属性个数超过多少个才强制排序
    //   "minKeys": 2,
    //   // 针对属性名是数字，不使用自然排序表示还是按照第一个字符进行排序，如果设置为 true 表示会按照人类的认知 3 < 10，那么 3 排在前面
    //   "natural": true,
    // }],

    // --fix 设置是否根据同一块中变量名称的第一个字符按照字母顺序进行属性排序。
    // "sort-vars": ["error"],

    // --fix 设置在代码块前是否有空格。仅适用于不是以新行开头的块。
    // 代码块前至少有一个空格。
    "space-before-blocks": ["error", "always"],

    // --fix 函数定义的时候，设置函数名称/函数关键字与开始括号之间是否有空格。默认匿名函数不需要空格。
    // 禁止有空格
    "space-before-function-paren": ["error", "never"],

    // --fix 设置所有的小括号中，开始括号和结束括号与括号里面的内容之间是否有一个或多个空格。
    // 禁止有空格
    "space-in-parens": ["error", "never"],

    // --fix 设置中缀运算符前后是否有空格
    "space-infix-ops": ["error", {
      // 设置为 true，可以支持 32 位整数
      "int32Hint": true,
    }],

    // --fix 设置单词一元运算符之后和非单词一元运算符前后是否有空格。
    "space-unary-ops": ["error", {
      // 设置为 true 表示规则适用于单词一元运算符： `new`, `delete`, `typeof`, `void`, `yield`
      words: true,
      // 设置为 true 表示规则适用于单词一元运算符： `-` `+` `--` `++` `!` `!!`      
      nonwords: false,
    }],

    // --fix 设置注释中 // 或 /* 后是否有空格。
    // // 或 /* 后面至少有一个空格
    "spaced-comment": ["error", "always"],

    // --fix 设置 switch 语句的 case 和 default 子句中的冒号前后是否有空格
    "switch-colon-spacing": ["error", {
      // 冒号后面有一个或多个空格
      "after": true,
      // 冒号前面不能有空格
      "before": false,
    }],

    // --fix 设置模板标签函数和模板字面量之间是否有空格。
    // 不能有空格
    "template-tag-spacing": ["error", "never"],

    // --fix 设置文件是否以 Unicode BOM 字符 U+FEFF 开头。
    // 文件不能以 Unicode BOM 开头
    "unicode-bom": ["error", "never"],

    // --fix 开启此规则表示使用括号将正则表达式括起来。
    "wrap-regex": ["error"],

  }

};