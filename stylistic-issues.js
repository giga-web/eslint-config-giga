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
    // 第一个单词不能使用小写字母开头
    "capitalized-comments": ["error", "always"],

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
    "func-style": ["error", "expression"],
    
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
      // 最少2个字符
      "min": 2,
      // 最少20个字符
      "max": 20,
    }],

    // 要求赋值和函数定义中的标识符与指定的正则表达式匹配。
    // 暂不设置
    // "id-match": ["error", "^[a-z]+([A-Z][a-z]+)*$"]

    // --fix 设置包含隐式返回的箭头函数前是否换行
    // 禁止在函数体前换行
    "implicit-arrow-linebreak": ["error", "beside"],

    // --fix 设置缩进。默认 4 空格。
    // 设置缩进 2 个空格
    "indent": ["error", 2],

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
    "line-comment-position": ["error", "above"],

    // --fix 设置使用那种风格的换行符。屏蔽不同的操作系统、不同的 VCS 版本控制系统、不同编辑器的差异。
    // 强制使用 Unix 换行符
    "linebreak-style": ["error", "unix"],

    // --fix 设置在注释之前/之后是否需要空白行。
    "lines-around-comment": ["error", {
      // (default) 块级注释前面需要空一个行
      "beforeBlockComment": true, 
      // 块级注释后面需要空一个行
      "afterBlockComment": true, 
      // 行级注释前面需要空一个行
      "beforeLineComment": true, 
      // 行级注释后面需要空一个行
      "afterLineComment": true, 
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



  }

};