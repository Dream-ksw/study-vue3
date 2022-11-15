/**
 * babel编译器的作用就是将我们的源代码,转换成浏览器可以直接识别的另外一段源代码
 * babel编译器的工作流程:
 * 原生源代码
 * 解析阶段(Parsing)
 * 转换阶段(Transformation)
 * 生成阶段(Code Generation)
 * 目标源代码
 * 
 * 原生源代码 -- 
 * 词法分析(Lexical Analysis) (将每个词进行分析) -- 
 * tokens数组 (组成一个数组) -- 
 * 语法分析(syntactic analysis) (语法分析) -- 
 * AST抽象语法树 --
 * 遍历(Traversal) -- 
 * 访问(Visitor) -- 
 * 应用插件(Plugin) -- 
 * 新的ast(新的抽象语法树) -- 
 * 目标源代码
 * 
 */

const names = ['abc', 'cba', 'nba']
names.forEach(item => console.log(item))