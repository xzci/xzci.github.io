var store = [{
        "title": "format test",
        "excerpt":"format test   01 Knowledge           ","categories": ["Notes"],
        "tags": ["AI"],
        "url": "/notes/Format-Test/",
        "teaser": null
      },{
        "title": "Description of an Alembic",
        "excerpt":"The complete distilling apparatus consists of three parts: the “cucurbit” (Arabic ḳarʿa, Greek βίκος), the still pot containing the liquid to be distilled, which is heated by a flame; the “head” or “cap” (Arabic anbiḳ, Greek ἄμβιξ) which fits over the mouth of the cucurbit to receive the vapors, with...","categories": ["General","External sources"],
        "tags": [],
        "url": "/general/external%20sources/example-post-one/",
        "teaser": null
      },{
        "title": "History of the Alembic",
        "excerpt":"Dioscorides’ ambix (described in his De materia medica) is a helmet-shaped lid for gathering condensed mercury. For Athenaeus (~ 225 C.E.) it is a bottle or flask. For later chemists it denotes various parts of crude distillation devices. Alembic drawings appear in works of Cleopatra the Alchemist, Synesius, and Zosimos...","categories": ["History","External sources"],
        "tags": [],
        "url": "/history/external%20sources/example-post-two/",
        "teaser": null
      },{
        "title": "Description of a Pot Still",
        "excerpt":"A pot still is a type of still used in distilling spirits such as whisky or brandy. Heat is applied directly to the pot containing the wash (for whisky) or wine (for brandy). This is called a batch distillation (as opposed to a continuous distillation). At standard atmospheric pressure, alcohol...","categories": ["General"],
        "tags": [],
        "url": "/general/example-post-three/",
        "teaser": null
      },{
        "title": "Summary",
        "excerpt":"I have deleted all my posts and i want to rebuild a new blog, including new tools and new programming languages. By the way, I got an conditional offer from UQ， Hope i can pass all the text. :smile: Titles Here will be somethings i want to post. Finished Here...","categories": ["Summary"],
        "tags": [],
        "url": "/summary/Summary/",
        "teaser": null
      },{
        "title": "Thinking in Java",
        "excerpt":"Here is some answers of Thinking in Java, during the time i am studying Java, I find lots of differences and improvements between C++. I try my best to finish all questions behind every chapters, because I think the best way to study a programming language is to code as...","categories": ["Answers"],
        "tags": ["Java"],
        "url": "/answers/Thinking-in-Java/",
        "teaser": null
      },{
        "title": "编程中用到的计算方法",
        "excerpt":"整理一些不知道的计算方法   不使用除号计算除法(整数)   void f(int a, int b) {     int quotient, remainder;     quotient = 0;     while (a &gt; b) {         quotient++;         a -= b;     }     remainder = a;     printf(\"%d, %d\", quotient, remainder); }   取得数字各位的值的加和   ```c while(x &gt; 0) {     y += x % 10;     x /= 10; }   ","categories": ["中文笔记"],
        "tags": ["Algorithms"],
        "url": "/%E4%B8%AD%E6%96%87%E7%AC%94%E8%AE%B0/%E7%BC%96%E7%A8%8B%E4%B8%AD%E7%94%A8%E5%88%B0%E7%9A%84%E8%AE%A1%E7%AE%97%E6%96%B9%E6%B3%95/",
        "teaser": null
      },{
        "title": "Design Patterns",
        "excerpt":"Nowadays I am studying Design Patterns, making lots of notes to help me understand the important knowledge in this book. and here are them, I try to upload them to my Blog everyday.   #  ","categories": ["Notes"],
        "tags": ["Design Patterns"],
        "url": "/notes/Design-Patterns/",
        "teaser": null
      },{
        "title": "JavaScript - The Definitive Book",
        "excerpt":"This Blog mainly focus on learning JavaScript, I used JavaScript: THe Definitive Book to study JavaScript. Because lots of people call this book JavaScript’s Bible. I quickly read 5 chapters of this book, I think JavaScript is much like Java, but still has some differences. I will write down some...","categories": ["Notes"],
        "tags": ["JavaScript"],
        "url": "/notes/JavaScript-The-Definitive-Book/",
        "teaser": null
      },{
        "title": "编程学习笔记",
        "excerpt":"一些东西还是用中文总结一下，然后看看有没有可能再用英语写，叹气自己的英语水平。   排序   各种排序在不同情形下的使用场景.   选择   特点      运行时间和原数组数据无关   数据移动是所有排序中最少的   交换次数和数组的大小成线性相关   插入   特点      所需时间与原始数据有关, 元数据的随机性决定了时间所需的长短   适用场景      非随机数组很有效   部分有序的数据   希尔   特点      插入排序的改进版   需要确定每个子数组的分段   适用场景      可以适用于大型数组, 表现都比较好   归并   是分治的排序算法   特点      保证长度为N的数组, 需要花费的时间与NlogN成正比   所需要的额外空间和N成正比   当数组长度为2的幂时, 2中方式所用的比较方式和访问数组的次数相同, 但是顺序不同.   当数组长度 不是 为2的幂时, 2种比较方式和访问数组的次数有所不同,   自顶向下   自底向上   特点      比较适合用链表组织的数据   快速   是分治的排序算法   定理和命题        ","categories": ["中文笔记"],
        "tags": ["Java","JavaScript"],
        "url": "/%E4%B8%AD%E6%96%87%E7%AC%94%E8%AE%B0/%E7%BC%96%E7%A8%8B%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/",
        "teaser": null
      },{
        "title": "Data Structures and Algorithms",
        "excerpt":"整理一下《数据结构与算法分析 c语言描述 第二版》 （Data structures and algorithm analysis in c）这本书的相关知识点。 recursion 递归 一些基本的问题 单独输出整数每个位置上的数 void print(int unsigned N) { if(N &gt;= 10) print(N / 10); /* 1 */ printf(\"%d\\n\", N % 10); } 特别的，% 的开销会比较高， /* 1 */ 处可以使用 printf(\"%d\\n\", N - ((N / 10) * 10)); 求最大子序列的和 分治法 //待补充...","categories": ["Notes"],
        "tags": ["Data Structures","Algorithms","C"],
        "url": "/notes/Data-Structures-and-Algorithms/",
        "teaser": null
      },{
        "title": "算法竞赛入门经典",
        "excerpt":"算法竞赛入门经典的例题和习题，变种题是自己想的和自己添加的，其他的题目则为书本上选取 第一章 圆柱体表面积 输入底面半径r和高h，输出圆柱体的表面积，保留3位小数 3.5 9 Area = 274.889 double fun(double r, double h) { return (r * r * PI) * 2 + ((PI * 2 * r) * h); } void f_2(void) { double r, h; scanf(\"%lf%lf\", &amp;r, &amp;h); printf(\"Area = %.3lf\", O_1_1(r, h)); } // ----------------- void...","categories": ["中文笔记"],
        "tags": ["C","Algorithms"],
        "url": "/%E4%B8%AD%E6%96%87%E7%AC%94%E8%AE%B0/%E7%AE%97%E6%B3%95%E7%AB%9E%E8%B5%9B%E5%85%A5%E9%97%A8%E7%BB%8F%E5%85%B8/",
        "teaser": null
      },{
        "title": "Tips on C",
        "excerpt":"This blog is talking about the tips about C which i think are most important.   Covert to String   ##   int main() {     printf(\"test\"); }   ","categories": ["Notes"],
        "tags": ["C"],
        "url": "/notes/Tips-on-C/",
        "teaser": null
      },{
        "title": "杂项",
        "excerpt":"作为个人不知道如何分类的一些反思和总结。 总结 封装 主要的原因是为了编程简单，比如说，一段重复的操作，或者重复的结构，可以通过封装对程序进行简化处理，只需要在某次编写好相关的函数，或者类，通过调用或者继承，将大大减少开发的时间。同时在修改时，也会变得更为简单。（只需要修改一处，其余的部分都会随之更改。), 同时。如果有写有细微的改动，此时，可以使用各种语言提供的，比如虚函数，抽象函数，对相应的实现进行针对化的封装。 Try-Catch 对程序要有相应的错误处理。需要有出错文件，出错行号（可选）， 出错函数，或者是确认用的信息。 确认需要是否需去自己实现相关的功能，相关的语言中是否有提供相应的类。 如果实现的话，有几个问题： 如何确定行号，（c语言可以简单实现，其他的好像比较复杂） 如何确定函数名，自动确定。（被包括的函数？程序的API？） 出错的源文件 正式上线的时候不需要清空log文件。 设计模式 相应的，先要去确认一下 错误如何处理，是否要留有记录，出错后应该如何操作。 这里是业务逻辑。 结束处理。确认结束后应该出现什么样子的提示，或者发送邮件。 用户体验。 class -&gt; 方法 -&gt; 变量 （注意各种变量的保护级别，相应的处理。） 学习： Do the test————–&gt;get wrong or do not understand | | | | +read the book and get understand + design and code———-&gt;get wrong...","categories": ["中文笔记"],
        "tags": ["Others"],
        "url": "/%E4%B8%AD%E6%96%87%E7%AC%94%E8%AE%B0/Small-Tips/",
        "teaser": null
      },{
        "title": "study of C",
        "excerpt":"综述 文献摘录 C其他展开 extern 变量 &amp; 函数 指针 指针和数组 const的含义 const与指针结合 使用Typeof提升可读性 为什么要封装成函数 全部功能写在main里有什么坏处 封装函数时会出现什么困难 宏 备注 每日一更 +代表更新 -代表还在占坑中（没有内容暂待更新） 更新内容： C其他展开 数组 文献摘录 摘自 你必须知道的495个C语言问题 QA Q：如何生成“半全局变量” （部分源文件中部分函数可以访问的变量） A: C语言办不到。但是实在要做的话： 为一个库或相关函数的集合中的所有函数和全局变量加一个唯一的前缀。并用文字警告，使用该集合的用户不能定义和使用文档列出的公用符合意外的任何带有前缀的其他符号。 使用下划线命名。 作用域 标识声明的有效区域： 函数 文件 块 原型 命名空间 行标（label，goto的目的地） 标签（tag，struct，union和enum的名称&lt;-这3种命名空间不相互独立） struct/union的成员 普通标识符（函数，变量，类型定义，枚举常量） 链接类型 外部链接（全局，非静态变量和函数） 内部链接（仅限于文件作用域内的静态函数和变量） 无链接（举办变量和类型定义（typedef）名称，枚举常量 C其他展开 数组...","categories": ["中文笔记"],
        "tags": ["C"],
        "url": "/%E4%B8%AD%E6%96%87%E7%AC%94%E8%AE%B0/study-of-C/",
        "teaser": null
      },{
        "title": "study of Java",
        "excerpt":"综述 * Java 9 有坑 (+) 11-18 * Java 学习 * Java 学习 备注 每日一更 +代表更新完成。-为待续 java 9 对环境变量做了改动，原来的：.;%JAVA_HOME%\\lib\\dt.jar;%JAVA_HOME%\\lib\\tools.jar; 中的dt.jar 和tools.jar 被取消了。所以现在只需要一个__[ . ]__ 嗯。就是这样。 JAVA_HOME JDK installation path, example: C:\\Program Files\\Java\\jdk-9 CLASSPATH . (just a dot) PATH It may already exists on your system under the name Path, so...","categories": ["中文笔记"],
        "tags": ["Java"],
        "url": "/%E4%B8%AD%E6%96%87%E7%AC%94%E8%AE%B0/study-of-Java/",
        "teaser": null
      },{
        "title": "study of Python",
        "excerpt":"* Python语法 * Python新增语法(与C/C++不同的) * Python函数 * 简单Python练习 备注 每日一更 +代表更新完成。-为待续 先占个坑 Python语法 众所周知，python是个动态类型的语言。意味着，你可以不用去声明变量类型就去使用它，但是一定要记住，python是一个强类型的语言，不用声明变量类型，不是所该语言不区分变量类型，而是语言本身在底层将转换替你做好了。 所以在面对”123” + “3”和 123 + 3 时，你还是需要手工去确认它的类型。 其他的函数细节直接help可以去查询相关的函数细节。 对于python所提供的相对序列的操作相较C或者C++更为直观。可以讲python的这些数据结构理解为一个void* 的变长数据也好，或者一个打包好的object也好。（其实往往不需要去关心这些的内部细节） 闭包 闭包就是能够读取其他函数内部变量的函数。创建闭包的三点：（援引自网络） 闭包函数必须有内嵌函数 内嵌函数需要引用该嵌套函数上一级namespace中的变量 闭包函数必须返回内嵌函数 list 相比较来说，list，以[]包括的元素，可以类比成C++中的vector，但是内部的元素可以是任意的类型，相比C++必须在vector中确定明确的数据类型，更加的便利和可读，能够实现插入，删除，更改的操作。同时也可以支持C风格的下标访问。 特别的，在使用help时，内置函数的说明存在相互的包含关系，比如在list中的index，单独使用help(index())无法查询得到，需要使用 help(list) 来查询到相应的帮助文件。 特别的，复制是浅复制（对一个的更改后，复制的内容也会更改） a = [1,2,3] b = a b[1] = 100 # b [1, 100, 3] #...","categories": ["中文笔记"],
        "tags": ["Python"],
        "url": "/%E4%B8%AD%E6%96%87%E7%AC%94%E8%AE%B0/study-of-Python/",
        "teaser": null
      },{
        "title": "study of Regular Expressions",
        "excerpt":"综述 * 原字符 * 实例 * 练习题 备注 每日一更 +代表更新 -代表还在占坑中（没有内容暂待更新） 更新内容： 新的元字符更新 编程依赖 使用C#作为正则表达式的学习工具，正则表达式在各种语言中都支持（自带或者相关的库） 在这里使用C#作为学习的工具。 C#中使用正则表达式可以有几种方式： // 本次主要采用这样的实现方式（便于书写） string[] s = { \"catTheOtherText\", \"TheOtherTextcat\", \"TheOtherText\", \"TheOthercatText\", \"ThecOtheraTextt\" }; string strRegular = \"^cat\"; foreach( var str in s) { Match match = Regex.Match(str, @strRegular); if (match.Success) { Console.WriteLine(str + \"...","categories": ["中文笔记"],
        "tags": ["Regular Expressions"],
        "url": "/%E4%B8%AD%E6%96%87%E7%AC%94%E8%AE%B0/study-of-Regular-Expressions/",
        "teaser": null
      },{
        "title": "计算机网络学习笔记",
        "excerpt":"一些东西还是用中文总结一下，然后看看有没有可能再用英语写，叹气自己的英语水平。学习计算机网络的书本是:计算机网络自顶向下方法(computer networking A top-down approach) 概念术语说明 端系统(end system) 彼此交换报文，通过通信链路(communication link)和 分组交换机 (Packet switch)连接在一起。 端系统通过因特网服务提供商(Internet Service Provider ISP)接入互联网。端系统、分组交换机和其他因特网部件都要运行一系列协议。TCP/IP 为因特网主要的协议。与因特网相连的端系统提供了一个套接字接口(socket interface)。 分组 Packet: 当一台端系统向另外的一台端系统发送数据的时候，发送端系统讲数据分段，并为每段加上首部字节，由此形成的信息包。 每个分组都要经过 分组交换机(Packet switch) 通信链路(communication link) 通过分组交换机和通信链路的有 电路交换(circuit switching) 分组交换(packet switching) 分组交换机 Packet switch: 从一条入通信链路接受到达的分组，并从他的一条出通信链路转发该分组。 多数分组交换机在链路的输入端使用存储转发传输(store-and-forward transmission) 与电路交换的区别见下 交换机主要有 有路由器(router) 链路层交换机 (link-layer switch)。 存储转发传输 store-and-forward transmission: 交换机能够在开始向输出链路传输该跟组的第一个比特之前，必须接收到整个分组。 路径 route/path:...","categories": ["中文笔记"],
        "tags": ["Computer Networking"],
        "url": "/%E4%B8%AD%E6%96%87%E7%AC%94%E8%AE%B0/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/",
        "teaser": null
      },{
        "title": "数据结构和算法",
        "excerpt":"通过反复的练习，达到自己手写的程度（白板写代码），基本上为了理解好的代码，进行的代码摘抄。 基本数据结构 通过反复的练习，达到自己手写的程度（白板写代码） 每个数据结构的实现必须熟悉（最为基本的实现）虽然C++或者其他语言都有这相应的的基本实现，可以直接调用使用，（调用库函数）但是还是应该能够直接手写出代码。以其获得更为具体的优化。（能所不能） 相应的，要理解每个数据结构的优缺点。 展开 以后自己的代码也需要这样的设计。建立一个良好的接口，增加程序代码的复用。 比如在上记得代码中，对链表这个数据结构进行了抽象，相同的结构如： 插入 删除 头节点 尾结点 链表长度 链表初始化 链表销毁 这些地方这3种数据结构操作相似。可以进行抽象，在其他提供类的语言中，这些可以通过类进行继承，以期实现代码的复用。 对于工作之中，使代码多结构化可以减少需求变更的情况下，尽可能的减少修改代码的行数。 比如，链表实现的代码中，需要添加一个功能，那么可以只需要在list中实现这个功能，其他数据结构就可以通过相应的参数，return给相关的函数。 另外比如需要修改插入函数，那么仅仅只需要在list函数中就行修改就可以保证，剩下的数据结构同时被修改。 这里的数据结构可以替换成其他工作中需要实现的功能等。结果同样。 C语言编程细节 注意因为C语言没有bool类型。所以在返回值的时候，会出现 -1， 0， 1等多种情况。因为在C中True 是任意的非0数字，只有0是false, 所以在写自己的函数的时候，要注意自己的函数应该返回状态码（比如一些函数错误结束后的返回-1），还是用于if判断的（0，1） 链表系 单链表 最为简单的数据结构，每个节点为一个自己定义的结构（包含数据，指针 指向下一个节点） 因为只保存了下一个节点的地址，所以单链表是不可以倒序遍历的，也不能随机访问。必须由头节点逐个依次的访问。 如果每个下一个节点有重复则称之为循环链表 &lt;-判断是否成环也是相应的算法题之一，并且我觉得也是一些有用的算法题，需要特别记忆的。 特别的： 每个节点的位置是离散的（后一个节点的内存位置并不是在节点内存的下一个） 这种分散的特性，相比数组的连续内存有些时候会更加高效。 如果发生删除操作一定要先获取以后节点的地址 如果插入、删除的__位置为NULL__，则默认插入、删除的位置在表头。 //节点定义 typedef struct ListElmt_ { void *data; // can use point...","categories": ["中文笔记"],
        "tags": ["数据结构","Algorithms","C","Java"],
        "url": "/%E4%B8%AD%E6%96%87%E7%AC%94%E8%AE%B0/Algorithms/",
        "teaser": null
      },{
        "title": "Leetcode",
        "excerpt":"2020年 02 月 26 日更新 &lt;-E&gt; Two Sum 286ms 2.67% vector&lt;int&gt; twoSum(vector&lt;int&gt;&amp; nums, int target) { vector &lt;int&gt; answer; for (auto i = 0; i != nums.size(); i++) { for (auto j = i + 1; j != nums.size(); j++) { if (nums[i] + nums[j] == target) { answer.push_back(i); answer.push_back(j);...","categories": ["中文笔记"],
        "tags": ["C++","Algorithms"],
        "url": "/%E4%B8%AD%E6%96%87%E7%AC%94%E8%AE%B0/leetcode/",
        "teaser": null
      },{
        "title": "Study of R",
        "excerpt":"I think this notes may help me to get better understanding of R. help You can type these codes to help you to understand the function which R is provided # get the help of function help(functionName) # get the args of one function args(functionName) # get example of one...","categories": ["Notes"],
        "tags": ["R"],
        "url": "/notes/stduy-of-R/",
        "teaser": null
      },{
        "title": "算法竞赛入门经典章节练习",
        "excerpt":"算法竞赛入门经典的习题，变种题是自己想的和自己添加的，其他的题目则为书本上选取 第二章 水仙花数 输出100-999 中所有的水仙花数, ABC 满足 ABC = A^3 + B^3 + C^3 则称之为水仙花数 适合穷举法 void f_1(void) { for (int i = 100; i &lt;= 999; i++) { int a, b, c; a = i / 100; b = i / 10 % 10; c = i % 100...","categories": ["中文笔记"],
        "tags": ["C","Algorithms"],
        "url": "/%E4%B8%AD%E6%96%87%E7%AC%94%E8%AE%B0/%E7%AE%97%E6%B3%95%E7%AB%9E%E8%B5%9B%E5%85%A5%E9%97%A8%E7%BB%8F%E5%85%B8%E7%AB%A0%E8%8A%82%E7%BB%83%E4%B9%A0/",
        "teaser": null
      },{
        "title": "看书疑问点",
        "excerpt":"看书的时候出现的各种问题   算法竞赛入门经典   P105   sstream很慢, 比string 还慢 是否可以随便任意使用, 还是会有什么限制?   C 语言   c99的变长数组是线程安全的么   是, 不安全的写法是语法错.   Java   final 关键字用来干啥的      修饰变量   final成员变量表示常量，只能被赋值一次，赋值后值不再改变。   修饰方法   final方法不能被子类方法覆盖，但可以被继承。   修饰类   final类不能被继承，没有子类，final类中所有方法都是final的。   static final 和 final   static final修饰的属性表示一旦给值，就不可修改，并且可以通过类名访问。   Comparable 类怎么使用   是个比较器, 此接口强行对实现它的每个类的对象进行整体排序. 如果非基本类型,需要自己实现compareTo() 方法.  ","categories": ["中文笔记"],
        "tags": ["C","Algorithms"],
        "url": "/%E4%B8%AD%E6%96%87%E7%AC%94%E8%AE%B0/%E7%9C%8B%E4%B9%A6%E7%96%91%E9%97%AE%E7%82%B9/",
        "teaser": null
      },{
        "title": "Two Sum 286ms 2.67%",
        "excerpt":"&lt;-E&gt; Two Sum 286ms 2.67% vector&lt;int&gt; twoSum(vector&lt;int&gt;&amp; nums, int target) { vector &lt;int&gt; answer; for (auto i = 0; i != nums.size(); i++) { for (auto j = i + 1; j != nums.size(); j++) { if (nums[i] + nums[j] == target) { answer.push_back(i); answer.push_back(j); } } } return answer;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/Two-Sum-286ms-2.67/",
        "teaser": null
      },{
        "title": "Add Two Numbers 56ms 27.5%",
        "excerpt":"&lt;-M&gt; Add Two Numbers 56ms 27.5% (l1 ? l1-&gt;val : 0) l1 = l1 ? l1-&gt;next : l1; /** * Definition for singly-linked list. * struct ListNode { * int val; * ListNode *next; * ListNode(int x) : val(x), next(NULL) {} * }; */ class Solution { public: ListNode* addTwoNumbers(ListNode*...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/Add-Two-Numbers-56ms-27.5/",
        "teaser": null
      },{
        "title": "Longest Substring Without Repeating Characters",
        "excerpt":"&lt;-M&gt; Longest Substring Without Repeating Characters class Solution { public: int lengthOfLongestSubstring(string s) { int ans = 0; vector&lt;-char&gt; check; for (auto i = s.begin(); i != s.end(); i++) { for (auto j = i; j != s.end(); j++) { if (find(check.begin(), check.end(), *j) == check.end()) check.push_back(*j); else break; }...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/Longest-Substring-Without-Repeating-Characters/",
        "teaser": null
      },{
        "title": "Median of Two Sorted Arrays 62ms",
        "excerpt":"&lt;-H&gt; Median of Two Sorted Arrays 62ms class Solution { public: double findMedianSortedArrays(vector&lt;-int&gt;&amp; nums1, vector&lt;-int&gt;&amp; nums2) { vector&lt;-int&gt; Temp; for (int i = 0; i != nums1.size(); i++) { Temp.push_back(nums1[i]); } for (int i = 0; i != nums2.size(); i++) { Temp.push_back(nums2[i]); } sort(Temp.begin(), Temp.end()); if (Temp.size() % 2 ==...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/Median-of-Two-Sorted-Arrays-62ms/",
        "teaser": null
      },{
        "title": "Longest Palindromic Substring 9ms",
        "excerpt":"&lt;-M&gt; Longest Palindromic Substring 9ms class Solution { public: string longestPalindrome(string s) { if (s.empty()) return \"\"; if (s.size() == 1) return s; int min_start = 0, max_len = 1; for (int i = 0; i &lt;- s.size();) { if (s.size() - i &lt;-= max_len / 2) break; int j...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/Longest-Palindromic-Substring-9ms/",
        "teaser": null
      },{
        "title": "ZigZag Conversion 16ms",
        "excerpt":"&lt;-M&gt; ZigZag Conversion 16ms class Solution { public: string convert(string s, int numRows) { if (numRows &lt;-= 1 || s.size() &lt;-= 1) return s; string result; for (int i = 0; i &lt;- numRows; i++) { for (int j = 0, index = i; index &lt;- s.size();j++, index = (2...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/ZigZag-Conversion-16ms/",
        "teaser": null
      },{
        "title": "Reverse Integer 15ms 77.99%",
        "excerpt":"&lt;-E&gt; Reverse Integer 15ms 77.99% class Solution { public: int reverse(int x) { int ans = 0; while (x) { int temp = ans * 10 + x % 10; if (temp / 10 != ans) return 0; ans = temp; x /= 10; } return ans; } }; class...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/Reverse-Integer-15ms-77.99/",
        "teaser": null
      },{
        "title": "Palindrome Number",
        "excerpt":"&lt;-E&gt; Palindrome Number   class Solution { public:     bool isPalindrome(int x) {         if(x&lt;0|| (x!=0 &amp;&amp;x%10==0)) return false;         int sum=0;         while(x&gt;sum) {             sum = sum*10+x%10;             x = x/10;         }         return (x==sum)||(x==sum/10);      } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/Palindrome-Number/",
        "teaser": null
      },{
        "title": "Longest Common Prefix",
        "excerpt":"&lt;-E&gt; Longest Common Prefix 求出最长的公共字串。这题有些歧义，根据Disucuss中的内容，增加条件如下： {“a”,”a”,”b”} should give “” as there is nothing common in all the 3 strings. {“a”, “a”} should give “a” as a is longest common prefix in all the strings. {“abca”, “abc”} as abc {“ac”, “ac”, “a”, “a”} as a. 有了该条件后，可以使用双重循环进行求解，在一般的操作中，需要注重边界值的问题。 string longestCommonPrefix(vector&lt;string&gt;&amp; strs) { string...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/Longest-Common-Prefix/",
        "teaser": null
      },{
        "title": "Subtract the Product and Sum of Digits of an Integer",
        "excerpt":"&lt;-E&gt; Subtract the Product and Sum of Digits of an Integer class Solution { public: int subtractProductAndSum(int n) { int a = 1; int b = 0; int x; while (n != 0) { x = n % 10; a *= x; b += x; n = n / 10;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/Subtract-the-Product-and-Sum-of-Digits-of-an-Integer/",
        "teaser": null
      },{
        "title": "Convert Integer to the Sum of Two No-Zero Integers",
        "excerpt":"&lt;-E&gt; Convert Integer to the Sum of Two No-Zero Integers class Solution { public: bool checkzero(int n) { int x; while (n != 0) { x = n % 10; if (x == 0) return false; n = n / 10; } return true; } vector&lt;int&gt; getNoZeroIntegers(int n) { vector&lt;int&gt;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/Convert-Integer-to-the-Sum-of-Two-No-Zero-Integers/",
        "teaser": null
      },{
        "title": "Decompress Run-Length Encoded List",
        "excerpt":"&lt;-E&gt; Decompress Run-Length Encoded List   class Solution { public:     vector&lt;int&gt; decompressRLElist(vector&lt;int&gt;&amp; nums) {         vector&lt;int&gt; ans;         for(int i = 0; i &lt; nums.size(); i+=2) {             for(int j = nums[i]; j != 0; j--) {                 ans.push_back(nums[i + 1]);             }         }     return ans;         } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/Decompress-Run-Length-Encoded-List/",
        "teaser": null
      },{
        "title": "Decrypt String from Alphabet to Integer Mapping",
        "excerpt":"&lt;-E&gt; Decrypt String from Alphabet to Integer Mapping class Solution { public: string freqAlphabets(string s) { string a = \"\"; int b; for(int i = s.size() - 1; i &gt;= 0; i--) { if(s[i] != '#') b = s[i] - '0' + 96; else { b = (s[i - 2]...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/Decrypt-String-from-Alphabet-to-Integer-Mapping/",
        "teaser": null
      },{
        "title": "Find N Unique Integers Sum up to Zero",
        "excerpt":"&lt;-E&gt;  Find N Unique Integers Sum up to Zero   class Solution { public:     vector&lt;int&gt; sumZero(int n) {         vector&lt;int&gt; ans;         if(n % 2) {             ans.push_back(0);                      }         else ;         for(int i = 1; i &lt;= n / 2; i++) {             ans.push_back(i);             ans.push_back(-i);         }         return ans;     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/Find-N-Unique-Integers-Sum-up-to-Zero/",
        "teaser": null
      },{
        "title": "Replace Elements with Greatest Element on Right Side",
        "excerpt":"&lt;-E&gt;  Replace Elements with Greatest Element on Right Side   class Solution { public:     vector&lt;int&gt; replaceElements(vector&lt;int&gt;&amp; arr) {         int temp = -1;         arr.push_back(-1);         for(int i = arr.size() - 2; i &gt;= 0; i--) {             if(arr[i] &gt; temp)                 temp = arr[i];             else                 arr[i] = temp;         }         arr.erase(arr.begin());         return arr;     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/Replace-Elements-with-Greatest-Element-on-Right-Side/",
        "teaser": null
      },{
        "title": "Find Numbers with Even Number of Digits",
        "excerpt":"&lt;-E&gt; Find Numbers with Even Number of Digits class Solution { public: bool checkEvenDights(int n) { int dights = 0; while(n != 0) { n /= 10; dights++; } if(dights % 2) return false; else return true; } int findNumbers(vector&lt;int&gt;&amp; nums) { int ans = 0; for(auto i : nums)...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/Find-Numbers-with-Even-Number-of-Digits/",
        "teaser": null
      },{
        "title": "Convert Binary Number in a Linked List to Integer",
        "excerpt":"&lt;-E&gt; Convert Binary Number in a Linked List to Integer /** * Definition for singly-linked list. * struct ListNode { * int val; * ListNode *next; * ListNode(int x) : val(x), next(NULL) {} * }; */ class Solution { public: int getDecimalValue(ListNode* head) { int ans = 0; while(head !=...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/Convert-Binary-Number-in-a-Linked-List-to-Integer/",
        "teaser": null
      },{
        "title": "Element Appearing More Than 25% In Sorted Array",
        "excerpt":"&lt;-E&gt; Element Appearing More Than 25% In Sorted Array class Solution { public: int findSpecialInteger(vector&lt;int&gt;&amp; arr) { int count = arr.size() / 4; int temp = arr[0]; int index = 0; for(int i = 1; i &lt; arr.size(); i++) { index++; if(arr[i] != temp) { temp = arr[i]; index =...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/Element-Appearing-More-Than-25-In-Sorted-Array/",
        "teaser": null
      },{
        "title": "Jewels and Stones",
        "excerpt":"&lt;-E&gt; Jewels and Stones // 1 class Solution { public: int numJewelsInStones(string J, string S) { int ans = 0; for (auto i : S) { if (find(J.begin(), J.end(), i) != J.end()) ans++; } return ans; } }; // 2 class Solution { public: int numJewelsInStones(string J, string S) {...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/Jewels-and-Stones/",
        "teaser": null
      },{
        "title": "Find Winner on a Tic Tac Toe Game",
        "excerpt":"&lt;-E&gt; Find Winner on a Tic Tac Toe Game class Solution { public: string tictactoe(vector&lt;vector&lt;int&gt;&gt;&amp; moves) { vector&lt;int&gt; aRow(3); vector&lt;int&gt; bRow(3); vector&lt;int&gt; aCol(3); vector&lt;int&gt; bCol(3); int aIndex_1 = 0; int aIndex_2 = 0; int bIndex_1 = 0; int bIndex_2 = 0; for (int i = 0; i &lt; moves.size(); i++)...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/Find-Winner-on-a-Tic-Tac-Toe-Game/",
        "teaser": null
      },{
        "title": "Minimum Time Visiting All Points",
        "excerpt":"&lt;-E&gt; Minimum Time Visiting All Points class Solution { public: int minTimeToVisitAllPoints(vector&lt;vector&lt;int&gt;&gt;&amp; points) { int ans = 0; for (int i = 1; i &lt; points.size(); i++) { int x = points[i][0] - points[i - 1][0]; int y = points[i][1] - points[i - 1][1]; if(x &lt; 0) x *= -1;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/Minimum-Time-Visiting-All-Points/",
        "teaser": null
      },{
        "title": "Shift 2D Grid",
        "excerpt":"&lt;-E&gt; Shift 2D Grid // 1 class Solution { public: vector&lt;vector&lt;int&gt;&gt; shiftGrid(vector&lt;vector&lt;int&gt;&gt;&amp; grid, int k) { int row = grid.size(); int col = grid[0].size(); int n = row * col; vector&lt;vector&lt;int&gt;&gt; ans = grid; for(int i = 0; i &lt; n; i++) { int j = (i + k) %...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/Shift-2D-Grid/",
        "teaser": null
      },{
        "title": "Check If It Is a Straight Line",
        "excerpt":"&lt;-E&gt; Check If It Is a Straight Line class Solution { public: bool checkStraightLine(vector&lt;vector&lt;int&gt;&gt;&amp; coordinates) { bool temp = true; int a = coordinates[1][0] - coordinates[0][0]; int b = coordinates[1][1] - coordinates[0][1]; for(int i = 2; i &lt; coordinates.size(); i++) { int x = coordinates[i][0] - coordinates[0][0]; int y =...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/Check-If-It-Is-a-Straight-Line/",
        "teaser": null
      },{
        "title": "Maximum 69 Number",
        "excerpt":"&lt;-E&gt; Maximum 69 Number class Solution { public: int maximum69Number (int num) { int ans = 0; vector&lt;int&gt; temp; while(num != 0) { temp.push_back(num % 10); num /= 10; } for (int i = temp.size() - 1; i &gt;= 0; i--) { if (temp[i] == 6) { temp[i] = 9;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/Maximum-69-Number/",
        "teaser": null
      },{
        "title": "Cells with Odd Values in a Matrix",
        "excerpt":"&lt;-E&gt; Cells with Odd Values in a Matrix class Solution { public: int oddCells(int n, int m, vector&lt;vector&lt;int&gt;&gt;&amp; indices) { int rowValue, colValue; int a = 1; int b = 1; for(int i = 1; i != indices.size(); i++) { rowValue = colValue = 0; for(int j = i ;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/Cells-with-Odd-Values-in-a-Matrix/",
        "teaser": null
      },{
        "title": "Split a String in Balanced Strings",
        "excerpt":"&lt;-E&gt; Split a String in Balanced Strings class Solution { public: int balancedStringSplit(string s) { int index = 1; int ans = 0; char temp = s[0]; for(int i = 1; i &lt; s.size(); i++) { if(s[i] != temp) { index--; } else index++; if(index == 0) { ans++; temp...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/Split-a-String-in-Balanced-Strings/",
        "teaser": null
      },{
        "title": "Play with Chips",
        "excerpt":"&lt;-E&gt; Play with Chips   class Solution { public:     int minCostToMoveChips(vector&lt;int&gt;&amp; chips) {         int temp[2] = {0};         for(int a : chips){             temp[a%2]++;         }         return min(temp[0], temp[1]);     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/Play-with-Chips/",
        "teaser": null
      },{
        "title": "Unique Number of Occurrences",
        "excerpt":"&lt;-E&gt; Unique Number of Occurrences class Solution { public: bool uniqueOccurrences(vector&lt;int&gt;&amp; arr) { int temp[2000] = {0}; for(int i = 0; i &lt; arr.size(); i++) { temp[arr[i] + 1000]++; } for(int i = 0; i &lt; 2000; i++) { if(temp[i] != 0) for(int j = i + 1; j &lt;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/Unique-Number-of-Occurrences/",
        "teaser": null
      },{
        "title": "新年新计划",
        "excerpt":"2020年 02 月 09 日更新 已看 读书程度超过70%, 但是还需要看英文原版, 并整理笔记的. 标注 完 的不需要整理笔记和再看英文原版. C 算法精解C语言版 有遗忘 (完)C语言程序设计 完 (完)C prime plus 5th edition 完 数据结构和算法分析 C 有遗忘, 存在不懂的地方, 对树和图的代码还不能自己实现 C++ Think in C++ 有遗忘 C++程序设计 有遗忘 数据结构和算法分析 C++ 有遗忘, 存在不懂的地方, 对树和图的代码还不能自己实现 C++ prime 有遗忘 JAVA 算法 不懂的地方还有很多, 最后一章没有完成 PYTHON (完)python 基础教程...","categories": ["中文笔记"],
        "tags": [],
        "url": "/%E4%B8%AD%E6%96%87%E7%AC%94%E8%AE%B0/%E6%96%B0%E5%B9%B4%E6%96%B0%E8%AE%A1%E5%88%92/",
        "teaser": null
      },{
        "title": "Minimum Absolute Difference",
        "excerpt":"&lt;-E&gt; Minimum Absolute Difference class Solution { public: vector&lt;vector&lt;int&gt;&gt; minimumAbsDifference(vector&lt;int&gt;&amp; arr) { sort(arr.begin(), arr.end()); vector&lt;vector&lt;int&gt;&gt; ans; int temp = arr[1] - arr[0]; for(int i = 1; i &lt; arr.size(); i++) { int n = abs(arr[i] - arr[i - 1]); if(n &lt; temp) { ans.clear(); temp = n; ans.push_back({arr[i - 1],...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/Minimum-Absolute-Difference/",
        "teaser": null
      },{
        "title": "Maximum Number of Balloons",
        "excerpt":"&lt;-E&gt; Maximum Number of Balloons class Solution { public: int maxNumberOfBalloons(string text) { int temp[5] = {0}; for(int i = 0; i &lt; text.size(); i++) { if(text[i] == 'a') temp[0]++; else if(text[i] == 'b') temp[1]++; else if(text[i] == 'l') temp[2]++; else if(text[i] == 'o') temp[3]++; else if(text[i] == 'n') temp[4]++;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/Maximum-Number-of-Balloons/",
        "teaser": null
      },{
        "title": "Valid Parentheses",
        "excerpt":"&lt;-E&gt; Valid Parentheses class Solution { public: bool isValid(string s) { if (s.size() % 2) return false; stack&lt;char&gt; st; for (auto i = s.begin(); i != s.end(); i++) { if (s.empty() &amp;&amp; (*i == ')' || *i == ']' || *i == '}')) { return false; } if (!st.empty() &amp;&amp;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/Valid-Parentheses/",
        "teaser": null
      },{
        "title": "Remove Duplicates from Sorted Array",
        "excerpt":"&lt;-E&gt; Remove Duplicates from Sorted Array class Solution { public: int removeDuplicates(vector&lt;int&gt;&amp; nums) { if(nums.size() == 0) return 0; int index = 1; int check = nums[0]; int set = 0; for(int i = 1; i != nums.size(); i++) { if(nums[i] != check) { check = nums[i]; index++; set ++;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/Remove-Duplicates-from-Sorted-Array/",
        "teaser": null
      },{
        "title": "Lucky Numbers in a Matrix",
        "excerpt":"&lt;-E&gt; Lucky Numbers in a Matrix class Solution { public: vector&lt;int&gt; luckyNumbers (vector&lt;vector&lt;int&gt;&gt;&amp; matrix) { vector&lt;int&gt; temp_min; vector&lt;int&gt; temp_max; vector&lt;int&gt; ans; for(int i = 0; i != matrix.size(); i++) { int check_min = matrix[i][0]; for(int j = 0; j != matrix[0].size(); j++) { if(check_min &gt; matrix[i][j]) check_min = matrix[i][j]; }...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/Lucky-Numbers-in-a-Matrix/",
        "teaser": null
      },{
        "title": "Non-decreasing Array",
        "excerpt":"&lt;-E&gt; Non-decreasing Array   class Solution { public: \tbool checkPossibility(vector&lt;int&gt;&amp; nums) { \t\tint cnt=0; \t\tfor(int i=1;i&lt;nums.size();i++){ \t\t\tif(nums[i]&lt;nums[i-1]){ \t\t\t\tcnt++; \t\t\t\tif(i-2 &gt;= 0 &amp;&amp; nums[i-2]&gt;nums[i]){ \t\t\t\t\tnums[i]=nums[i-1]; \t\t\t\t} \t\t\t\tif(cnt==2) break; \t\t\t} \t\t} \t\treturn cnt&lt;2;  \t} };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/Non-decreasing-Array/",
        "teaser": null
      },{
        "title": "Defanging an IP Address",
        "excerpt":"&lt;-E&gt; Defanging an IP Address   class Solution { public:     string defangIPaddr(string address) {         string ans = \"\";                  for(auto i : address)              ans = ((i == '.') ? ans + \"[.]\": ans + i);         return ans;     }      };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/Defanging-an-IP-Address/",
        "teaser": null
      },{
        "title": "Number of Steps to Reduce a Number to Zero",
        "excerpt":"&lt;-E&gt; Number of Steps to Reduce a Number to Zero   class Solution { public:     int numberOfSteps (int num) {         int i = 0;         while(num != 0) {             if(num % 2)                  num -= 1;             else                 num /= 2;             i++;         }         return i;     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/Number-of-Steps-to-Reduce-a-Number-to-Zero/",
        "teaser": null
      },{
        "title": "How Many Numbers Are Smaller Than the Current Number",
        "excerpt":"&lt;-E&gt; How Many Numbers Are Smaller Than the Current Number class Solution { public: vector&lt;int&gt; smallerNumbersThanCurrent(vector&lt;int&gt;&amp; nums) { int bucket[101] = {0}; for(auto i : nums) bucket[i]++; int index = 0; for(int i = 0; i != 101; i++) { if(bucket[i] != 0) { if(bucket[i] == 1) { bucket[i] =...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/How-Many-Numbers-Are-Smaller-Than-the-Current-Number/",
        "teaser": null
      },{
        "title": "Create Target Array in the Given Order",
        "excerpt":"&lt;-E&gt; Create Target Array in the Given Order   class Solution { public:     vector&lt;int&gt; createTargetArray(vector&lt;int&gt;&amp; nums, vector&lt;int&gt;&amp; index) {         vector&lt;int&gt; ans;         for(int i = 0; i != nums.size(); i++)              ans.insert(ans.begin() + index[i], nums[i]);         return ans;     }      };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/Create-Target-Array-in-the-Given-Order/",
        "teaser": null
      },{
        "title": "To Lower Case",
        "excerpt":"&lt;-E&gt; To Lower Case   class Solution { public:     string toLowerCase(string str) {         for(auto &amp;i: str) {             if(i &gt;= 'A' &amp;&amp; i &lt;= 'Z')                 i = i + 32;         }         return str;     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/To-Lower-Case/",
        "teaser": null
      },{
        "title": "C++复习笔记",
        "excerpt":"2020年 02 月 26 日更新 变量初始化 函数体之外的变量都被初始化为 0 函数体内部的变量都不会被初始化 直接初始化 没有等号 拷贝初始化 有等号 引用 引用一旦被初始化后, 就不能改为其他对象, (会进行赋值操作) 传递引用 可以阻止函数传递时, 对参数的拷贝 类 成员函数 Type A::f() const {} 若将成员函数声明为const，则不允许通过其修改类的数据成员。 值得注意的是，如果类中存在指针类型的数据成员即便是const函数只能保证不修改该指针的值，并不能保证不修改指针指向的对象。 设置友元类, 可以访问 私有变量 构造函数初始值 在构造函数中,无法忽略 初始化和赋值之间的差异 构造函数初始化存在顺序关系 最好让保证于成名声明的顺序一致 class TestA { public: TestA(int ii); private: int i; const int ci; int &amp;i;...","categories": ["中文笔记"],
        "tags": ["C++"],
        "url": "/%E4%B8%AD%E6%96%87%E7%AC%94%E8%AE%B0/CPlus%E5%A4%8D%E4%B9%A0%E7%AC%94%E8%AE%B0/",
        "teaser": null
      },{
        "title": "设计模式学习笔记",
        "excerpt":"2020年03月05日更新   模式分类      AbstractFactory：提供一个创建一系列相关或相互依赖对象的接口，而无需指定它 们具体的类。   Adapter：将一个类的接口转换成客户希望的另外一个接口。Adapter模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。   Bridge：将抽象部分与它的实现部分分离，使它们都可以独立地变化。   Builder：将一个复杂对象的构建与它的表示分离，使得同样的构建过程可以创建不同的表示。   ChainofResponsibility：为解除请求的发送者和接收者之间耦合，而使多个对象都有机会处理这个请求。将这些对象连成一条链，并沿着这条链传递该请求，直到有一个对象处理它。   Command：将一个请求封装为一个对象，从而使你可用不同的请求对客户进行参数化；对请求排队或记录请求日志，以及支持可取消的操作。   Composite：将对象组合成树形结构以表示“部分-整体”的层次结构。Composite使得客户对单个对象和复合对象的使用具有一致性。   Decorator：动态地给一个对象添加一些额外的职责。就扩展功能而言,Decorator模式比生成子类方式更为灵活。   Facade：为子系统中的一组接口提供一个一致的界面，Facade模式定义了一个高层接口，这个接口使得这一子系统更加容易使用。   FactoryMethod：定义一个用于创建对象的接口，让子类决定将哪一个类实例化。FactoryMethod使一个类的实例化延迟到其子类。   Flyweight：运用共享技术有效地支持大量细粒度的对象。   Interpreter：给定一个语言,定义它的文法的一种表示，并定义一个解释器,该解释器使用该表示来解释语言中的句子。   Iterator：提供一种方法顺序访问一个聚合对象中各个元素,而又不需暴露该对象的内部表示。   Mediator：用一个中介对象来封装一系列的对象交互。中介者使各对象不需要显式地相互引用，从而使其耦合松散，而且可以独立地改变它们之间的交互。   Memento：在不破坏封装性的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态。这样以后就可将该对象恢复到保存的状态。   Observer：定义对象间的一种一对多的依赖关系,以便当一个对象的状态发生改变时,所有依赖于它的对象都得到通知并自动刷新。   Prototype：用原型实例指定创建对象的种类，并且通过拷贝这个原型来创建新的对象。   Proxy：为其他对象提供一个代理以控制对这个对象的访问。   Singleton：保证一个类仅有一个实例，并提供一个访问它的全局访问点。   State：允许一个对象在其内部状态改变时改变它的行为。对象看起来似乎修改了它所属的类。   Strategy：定义一系列的算法,把它们一个个封装起来,并且使它们可相互替换。本模式使得算法的变化可独立于使用它的客户。   TemplateMethod：定义一个操作中的算法的骨架，而将一些步骤延迟到子类中。TemplateMethod使得子类可以不改变一个算法的结构即可重定义该算法的某些特定步骤。   Visitor：表示一个作用于某对象结构中的各元素的操作。它使你可以在不改变各元素的类的前提下定义作用于这些元素的新操作。   对接口编程,而不是对实现编程  ","categories": ["中文笔记"],
        "tags": [],
        "url": "/%E4%B8%AD%E6%96%87%E7%AC%94%E8%AE%B0/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/",
        "teaser": null
      },{
        "title": "编译原理学习笔记",
        "excerpt":"2020年03月08日更新 Sets G=(VT，VN，S，P)是上下文无关文法 First sets 若X∈VT，则FIRST(X)＝{X}。(简单讲，终结符的FIRST集就是它本身) 若X∈VN，且有产生式X→a…，a∈VT， 则 a∈FIRST(X)X→ε,则ε∈FIRST(X)。　（简单讲，若是非终结符X，能推导出以终结符a开头的串，那么这个终结符a属于FIRST（X），若X能够推导出空符号串ε，那么空符号串ε也属于X的FIRST集） X→Y…是一个产生式且Y ∈VN 则把FIRST(Y)中的所有 非空符号串ε元素 都加入到FIRST(X)中。 若X∈VN；Y1，Y2，…，Yi∈VN，且有产生式X→Y1 Y2 … Yn；当Y1 Y2 … Yn-1都能推导出ε时，则FIRST(Y1)、FIRST(Y2)、…、FIRST(Yn-1)的所有非空元素和FIRST(Yn) 包含在FIRST(X)中。 即: FIRST(X)=(FIRST(Y1)－{ε} ）∪（FIRST(Y2)－{ε} ）∪…∪（FIRST(Yn-1)－{ε}）∪{FIRST(Yn)} ⑤.当(4)中所有Yi 能够推导出ε,(i=1,2,…n)，则 FIRST(X)=(FIRST(Y1)－{ε}）∪（FIRST(Y2)－ {ε}∪…∪（FIRST(Yn) －{ε}）∪{ε} 终结符的FIRST就是自己 对于产生式，如果最左边的能推导出ϵ 则再开始推第二个，并把最左边的FIRST并到自己的FIRST里。 S→AB S→bC A→ε A→b B→ε　　 B→aD C→AD C→b D→aS D→c FIRST(A)={ε,b} FIRST(B)={a,ε} FIRST(S)={b,a,ε} FIRST(D)={a,c} FIRST(C)={b,a,c} #是因为A中有ε才去看D的...","categories": ["中文笔记"],
        "tags": [],
        "url": "/%E4%B8%AD%E6%96%87%E7%AC%94%E8%AE%B0/%E7%BC%96%E8%AF%91%E5%8E%9F%E7%90%86%E4%B9%A0%E7%AC%94%E8%AE%B0/",
        "teaser": null
      },{
        "title": "Fibonacci Number",
        "excerpt":"&lt;-E&gt; Fibonacci Number   class Solution { public:     int fib(int N) {         if (N == 0)             return 0;         else if(N == 1)             return 1;         else             return fib(N - 1) + fib(N - 2);     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/Fibonacci-Number/",
        "teaser": null
      },{
        "title": "Remove Palindromic Subsequences",
        "excerpt":"&lt;-E 1332&gt; Remove Palindromic Subsequences   class Solution { public:     int removePalindromeSub(string s) {         if(s.empty()){             return 0;         }         if(isPalindrome(s)){             return 1;         }         return 2;     }     bool isPalindrome(string s){         for(int i=0; i != s.size(); i++){             if(s[i] != s[s.size() - 1 - i]){                 return false;             }         }         return true;     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1332-Remove-Palindromic-Subsequences/",
        "teaser": null
      },{
        "title": "The K Weakest Rows in a Matrix",
        "excerpt":"&lt;-E 1337&gt; The K Weakest Rows in a Matrix class Solution { public: vector&lt;int&gt; kWeakestRows(vector&lt;vector&lt;int&gt;&gt;&amp; mat, int k) { multimap&lt;int,int&gt; temp; for(int i = 0; i != mat.size(); i++) { int account = 0; for(int j = 0; j != mat[0].size(); j++) { account += mat[i][j]; } temp.insert(pair&lt;int,int&gt;(account,i)); } vector&lt;int&gt;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1337-The-K-Weakest-Rows-in-a-Matrix/",
        "teaser": null
      },{
        "title": "Check If N and Its Double Exist",
        "excerpt":"&lt;-E 1346&gt; Check If N and Its Double Exist class Solution { public: bool checkIfExist(vector&lt;int&gt;&amp; arr) { int positive[9999] = {0}; int negative[9999] = {0}; for(int i = 0; i != arr.size(); i++) { if(arr[i] &gt; 0) positive[arr[i]]++; else negative[-arr[i]]++; } for(int i = 1; i != 9999; i++) {...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1346-Check-If-N-and-Its-Double-Exist/",
        "teaser": null
      },{
        "title": "Sort Integers by The Number of 1 Bits",
        "excerpt":"&lt;-E 1356&gt; Sort Integers by The Number of 1 Bits   class Solution { public:   static bool cmp(int a,int b)     {         bitset&lt;32&gt; c1(a);         bitset&lt;32&gt; c2(b);         int p,q;         p=c1.count();         q=c2.count();         if(p==q)             return a&lt;b;         else return p&lt;q;     }     vector&lt;int&gt; sortByBits(vector&lt;int&gt;&amp; v) {         sort(v.begin(),v.end(),cmp);         return v;              } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1356-Sort-Integers-by-The-Number-of-1-Bits/",
        "teaser": null
      },{
        "title": "Number of Days Between Two Dates",
        "excerpt":"&lt;-E 1360&gt; Number of Days Between Two Dates class Solution { public: int daysBetweenDates(string date1, string date2) { return abs(daysPassedSince1971(date1) - daysPassedSince1971(date2)); } bool isLeapYear(int year){ return (year%400 == 0)||(year%100 != 0 &amp;&amp; year%4 == 0); } int daysPassedSince1971(string date){ int year = stoi(date.substr(0,4)); int month = stoi(date.substr(5,2)); int day...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1360-Number-of-Days-Between-Two-Dates/",
        "teaser": null
      },{
        "title": "Generate a String With Characters That Have Odd Counts",
        "excerpt":"&lt;-E 1374&gt; Generate a String With Characters That Have Odd Counts   class Solution { public:     string generateTheString(int n) {         if(n % 2){             string a(n, 'a');             return a;         }         else{                string a(n-1, 'a');             return \"b\"+a;         }                  } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1374-Generate-a-String-With-Characters-That-Have-Odd-Counts/",
        "teaser": null
      },{
        "title": "Find the Distance Value Between Two Arrays",
        "excerpt":"&lt;-E 1385&gt; Find the Distance Value Between Two Arrays class Solution { public: int findTheDistanceValue(vector&lt;int&gt;&amp; arr1, vector&lt;int&gt;&amp; arr2, int d) { int len1 = arr1.size(), len2 = arr2.size(); int ans = 0; bool chk; for(int i=0; i&lt;len1; i++){ chk = false; for(int j=0; j&lt;len2; j++){ if(abs(arr1[i]-arr2[j]) &lt;= d) { chk...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1385-Find-the-Distance-Value-Between-Two-Arrays/",
        "teaser": null
      },{
        "title": "Find Lucky Integer in an Array",
        "excerpt":"&lt;-E 1394&gt; Find Lucky Integer in an Array   class Solution { public:     int findLucky(vector&lt;int&gt;&amp; arr) {         int temp[500] = {0};         for(int i = 0; i!= arr.size(); i++) {             temp[arr[i]]++;         }         for(int i = 499; i != 0; i--) {             if(temp[i] == i)                  return i;         }                 return -1;     }    };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1394-Find-Lucky-Integer-in-an-Array/",
        "teaser": null
      },{
        "title": "Merge Two Sorted Lists",
        "excerpt":"&lt;-E 21&gt; Merge Two Sorted Lists /** * Definition for singly-linked list. * struct ListNode { * int val; * ListNode *next; * ListNode() : val(0), next(nullptr) {} * ListNode(int x) : val(x), next(nullptr) {} * ListNode(int x, ListNode *next) : val(x), next(next) {} * }; */ class Solution {...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/121-Merge-Two-Sorted-Lists/",
        "teaser": null
      },{
        "title": "Implement strStr()",
        "excerpt":"&lt;-E 28&gt; Implement strStr() class Solution { public: int strStr(string haystack, string needle) { if (needle.size() == 0) return 0; else if(needle.size() &gt; haystack.size()) return -1; else { for(int i = 0, j = 0; i!= haystack.size(); ) { if(haystack[i] != needle[j]) { i = i - j + 1;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/28-Implement-strStr/",
        "teaser": null
      },{
        "title": "Count and Say",
        "excerpt":"&lt;-E 38&gt; Count and Say class Solution { public: string countAndSay(int n) { if (n == 0) return \"\"; else if(n == 1) return \"1\"; else if (n == 2) return \"11\"; string ans = \"11\"; int counter = 0; while(n &gt;= 3) { string temp; for(int i = 0;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/38-Count-and-Say/",
        "teaser": null
      },{
        "title": "Length of Last Word",
        "excerpt":"&lt;-E 58&gt; Length of Last Word   class Solution { public:     int lengthOfLastWord(string s) {         int ans = 0;         for(int i = s.size() - 1; i &gt;= 0; i--) {             if(s[i] != ' ')                 ans++;             if(s[i] == ' ' &amp;&amp; ans != 0)                 return ans;         }         return ans;     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/58-Length-of-Last-Word/",
        "teaser": null
      },{
        "title": "Add Binary",
        "excerpt":"&lt;-E 67&gt; Add Binary class Solution { public: string addBinary(string a, string b) { const int aLength = a.length(); const int bLength = b.length(); const int resultLength = max(aLength, bLength) + 1; char temp[resultLength + 1]; temp[resultLength] = '\\0'; int resultIndex = resultLength - 1; int carry = 0; for(int...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/67.-Add-Binary/",
        "teaser": null
      },{
        "title": "Remove Duplicates from Sorted List",
        "excerpt":"&lt;-E 83&gt; Remove Duplicates from Sorted List /** * Definition for singly-linked list. * struct ListNode { * int val; * ListNode *next; * ListNode() : val(0), next(nullptr) {} * ListNode(int x) : val(x), next(nullptr) {} * ListNode(int x, ListNode *next) : val(x), next(next) {} * }; */ class Solution...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/83-Remove-Duplicates-from-Sorted-List/",
        "teaser": null
      },{
        "title": "Merge Sorted Array",
        "excerpt":"&lt;-E 88&gt; Merge Sorted Array   class Solution { public:     void merge(vector&lt;int&gt;&amp; nums1, int m, vector&lt;int&gt;&amp; nums2, int n) {     for(int i = 0; i != n; i++) {         nums1[i + m] = nums2[i];     }     sort(nums1.begin(), nums1.end());     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/88-Merge-Sorted-Array/",
        "teaser": null
      },{
        "title": "Same Tree",
        "excerpt":"&lt;-E 100&gt; Same Tree /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left),...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/100-Same-Tree/",
        "teaser": null
      },{
        "title": "Reverse Linked List",
        "excerpt":"&lt;-E 206&gt; Reverse Linked List /** * Definition for singly-linked list. * struct ListNode { * int val; * ListNode *next; * ListNode() : val(0), next(nullptr) {} * ListNode(int x) : val(x), next(nullptr) {} * ListNode(int x, ListNode *next) : val(x), next(next) {} * }; */ class Solution { public:...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/206-Reverse-Linked-List/",
        "teaser": null
      },{
        "title": "Monotonic Array",
        "excerpt":"&lt;-E 896&gt; Monotonic Array class Solution { public: bool isMonotonic(vector&lt;int&gt;&amp; A) { if(A.size() &lt; 2) return true; bool increasing =false; bool decreasing =false; for(int i = 1; i!= A.size(); i++) { if(A[i] - A[i - 1] &gt; 0) increasing = true; else if (A[i] - A[i - 1] &lt; 0)...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/896-Monotonic-Arrayy/",
        "teaser": null
      },{
        "title": "Symmetric Tree",
        "excerpt":"&lt;-E 101&gt; Symmetric Tree /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left),...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/101-Symmetric-Tree/",
        "teaser": null
      },{
        "title": "Distribute Candies to People",
        "excerpt":"&lt;-E 1103&gt; Distribute Candies to People class Solution { public: vector&lt;int&gt; distributeCandies(int candies, int num_people) { if (num_people == 1) return vector{candies}; vector&lt;int&gt; ans(num_people, 0); int k = 0; while (num_people * (k * num_people + num_people + 1) * (k + 1) / 2 &lt;= candies) k++; k--; candies...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1103-Distribute-Candies-to-People/",
        "teaser": null
      },{
        "title": "Asteroid Collision",
        "excerpt":"&lt;-E 735&gt; Asteroid Collision // method 1 class Solution { public: vector&lt;int&gt; asteroidCollision(vector&lt;int&gt;&amp; asteroids) { vector&lt;int&gt; ans; for(int i=0; i!=asteroids.size();i++){ if(ans.size() == 0) ans.push_back(asteroids[i]); else { while(ans.size() &gt; 0) { int temp = ans.back() + asteroids[i]; if(temp == 0 &amp;&amp; ans.back() &gt; 0) { ans.pop_back(); break; } else if(ans.back() &gt;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/735-Asteroid-Collision/",
        "teaser": null
      },{
        "title": "Min Stack",
        "excerpt":"&lt;-E 155&gt; Min Stack class MinStack { private: stack&lt;int&gt; stk; stack&lt;int&gt; min; public: /** initialize your data structure here. */ MinStack() { } void push(int x) { stk.push(x); if (min.empty() || min.top() &gt;= x) min.push(x); } void pop() { if (min.top() == stk.top()) min.pop(); stk.pop(); } int top() { return...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/155-Min-Stack/",
        "teaser": null
      },{
        "title": "Rotate Array",
        "excerpt":"&lt;-E 189&gt; Rotate Array // Method 1 class Solution { public: void rotate(vector&lt;int&gt;&amp; nums, int k) { k%=nums.size(); reverse(nums.begin(),nums.end()); reverse(nums.begin(),nums.begin()+k); reverse(nums.begin()+k,nums.end()); } }; // Method 2 class Solution { public: void rotate(vector&lt;int&gt;&amp; nums, int k) { k=k%nums.size(); int p=0; for(int i=0;i&lt;k&amp;&amp;p&lt;nums.size();i++) { int f=0; int j=i; int temp=nums[i]; do{ j=(j+k)%nums.size();...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/189-Rotate-Array/",
        "teaser": null
      },{
        "title": "Contains Duplicate II",
        "excerpt":"&lt;-E 219&gt; Contains Duplicate II class Solution { public: bool containsNearbyDuplicate(vector&lt;int&gt;&amp; nums, int k) { if (nums.size() == 0 || nums.size() == 1 || k == 35000) return false; for (int i = 0; i &lt; nums.size() - 1; i++) for (int j = i + 1; j &lt; nums.size();...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/219-Contains-Duplicate-II/",
        "teaser": null
      },{
        "title": "Shuffle the Array",
        "excerpt":"&lt;-E 1470&gt; Shuffle the Array   class Solution { public:           vector&lt;int&gt; shuffle(vector&lt;int&gt;&amp; nums, int n) {         vector&lt;int&gt; ans;          for (int i = 0, j = n; j &lt; nums.size(); i++, j++) {                  ans.push_back(nums[i]);                  ans.push_back(nums[j]);           }         return ans;     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1470-Shuffle-the-Array/",
        "teaser": null
      },{
        "title": "Maximum Depth of Binary Tree",
        "excerpt":"&lt;-E 104&gt; Maximum Depth of Binary Tree /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode *left, TreeNode *right)...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/104-Maximum-Depth-of-Binary-Tree/",
        "teaser": null
      },{
        "title": "N-Repeated Element in Size 2N Array",
        "excerpt":"&lt;-E 961&gt; N-Repeated Element in Size 2N Array   class Solution { public:     int repeatedNTimes(vector&lt;int&gt;&amp; A) {         for (int i = 2; i &lt; A.size(); ++i){             if(A[i] == A[i - 1] or A[i] == A[i-2]){                 return A[i];             }         }         return A[0];     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/961-N-Repeated-Element-in-Size-2N-Array/",
        "teaser": null
      },{
        "title": "Binary Tree Level Order Traversal II",
        "excerpt":"&lt;-E 107&gt; Binary Tree Level Order Traversal II /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode *left, TreeNode...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/107-Binary-Tree-Level-Order-Traversal-II/",
        "teaser": null
      },{
        "title": "Search in a Binary Search Tree",
        "excerpt":"&lt;-E 700&gt; Search in a Binary Search Tree /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode *left, TreeNode...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/700-Search-in-a-Binary-Search-Tree/",
        "teaser": null
      },{
        "title": "Convert Sorted Array to Binary Search Tree",
        "excerpt":"&lt;-E 108&gt; Convert Sorted Array to Binary Search Tree /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode *left,...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/108-Convert-Sorted-Array-to-Binary-Search-Tree/",
        "teaser": null
      },{
        "title": "DI String Match",
        "excerpt":"&lt;-E 942&gt; DI String Match // Method 1 class Solution { public: vector&lt;int&gt; diStringMatch(string S) { int numberI = 0; int numberD = S.size(); vector&lt;int&gt; ans(S.size() + 1, 0); int index = 0; for(auto i : S) { if (i == 'I') ans[index] = numberI++; else ans[index] = numberD--; index++;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/942-DI-String-Match/",
        "teaser": null
      },{
        "title": "Balanced Binary Tree",
        "excerpt":"&lt;-E 110&gt; Balanced Binary Tree /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode *left, TreeNode *right) : val(x),...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/110-Balanced-Binary-Tree/",
        "teaser": null
      },{
        "title": "N-ary Tree Postorder Traversal",
        "excerpt":"&lt;-E 590&gt; N-ary Tree Postorder Traversal /* // Definition for a Node. class Node { public: int val; vector&lt;Node*&gt; children; Node() {} Node(int _val) { val = _val; } Node(int _val, vector&lt;Node*&gt; _children) { val = _val; children = _children; } }; */ class Solution { public: vector&lt;int&gt; v; void...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/590-N-ary-Tree-Postorder-Traversal/",
        "teaser": null
      },{
        "title": "Final Prices With a Special Discount in a Shop",
        "excerpt":"&lt;-E 1475&gt; Final Prices With a Special Discount in a Shop class Solution { public: vector&lt;int&gt; finalPrices(vector&lt;int&gt;&amp; prices) { vector&lt;int&gt; ans; for(int i = 0; i != prices.size() - 1; i++) { int temp = prices[i] - prices[i + 1]; if(temp &gt;= 0) ans.push_back(temp); else { int temp_j; for(int j...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1475-Final-Prices-With-a-Special-Discount-in-a-Shop/",
        "teaser": null
      },{
        "title": "N-ary Tree Preorder Traversal",
        "excerpt":"&lt;-E 589&gt; N-ary Tree Preorder Traversal /* // Definition for a Node. class Node { public: int val; vector&lt;Node*&gt; children; Node() {} Node(int _val) { val = _val; } Node(int _val, vector&lt;Node*&gt; _children) { val = _val; children = _children; } }; */ class Solution { public: vector&lt;int&gt; preorder(Node* root)...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/589-N-ary-Tree-Preorder-Traversal/",
        "teaser": null
      },{
        "title": "Merge Two Binary Trees",
        "excerpt":"&lt;-E 617&gt; Merge Two Binary Trees /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode *left, TreeNode *right) :...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/617-Merge-Two-Binary-Trees/",
        "teaser": null
      },{
        "title": "Increasing Order Search Tree",
        "excerpt":"&lt;-E 897&gt; Increasing Order Search Tree /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode *left, TreeNode *right) :...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/897-Increasing-Order-Search-Tree/",
        "teaser": null
      },{
        "title": "Make Two Arrays Equal by Reversing Sub-arrays",
        "excerpt":"&lt;-E 1460&gt; Make Two Arrays Equal by Reversing Sub-arrays // Method 1 class Solution { public: bool canBeEqual(vector&lt;int&gt;&amp; target, vector&lt;int&gt;&amp; arr) { sort(target.begin(),target.end()); sort(arr.begin(),arr.end()); return arr==target; } }; // Method 2 class Solution { public: bool canBeEqual(vector&lt;int&gt;&amp; target, vector&lt;int&gt;&amp; arr) { vector&lt;int&gt; cnt(1001, 0); for (int i = 0; i...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1460-Make-Two-Arrays-Equal-by-Reversing-Sub-arrays/",
        "teaser": null
      },{
        "title": "Defuse the Bomb",
        "excerpt":"&lt;-E 1652&gt; Defuse the Bomb // Method 1 class Solution { public: vector&lt;int&gt; decrypt(vector&lt;int&gt;&amp; code, int k) { int n = code.size(); vector&lt;int&gt;res(n,0); if(k == 0) return res; int start = 1,end = k; int sum = 0; if(k &lt; 0) { // if k is negative then the first...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1652-Defuse-the-Bomb/",
        "teaser": null
      },{
        "title": "Unique Email Addresses",
        "excerpt":"&lt;-E 929&gt; Unique Email Addresses class Solution { public: int numUniqueEmails(const vector&lt;string&gt;&amp; emails) { unordered_set&lt;string&gt; mail; for(const auto&amp; m:emails) { string s; int pos = 0; for(int i = 0; i &lt; m.size(); ++i) { if(m[i] == '+') while(m[++i] != '@'); if(m[i] == '@') { pos=i; break; } if(m[i] !=...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/929-Unique-Email-Addresses/",
        "teaser": null
      },{
        "title": "Squares of a Sorted Array",
        "excerpt":"&lt;-E 977&gt; Squares of a Sorted Array // Method 1 class Solution { public: vector&lt;int&gt; sortedSquares(vector&lt;int&gt;&amp; A) { for(int i = 0; i != A.size(); i++) { A[i] = A[i] * A[i]; } sort(A.begin(), A.end()); return A; } }; // Method 2 class Solution { public: vector&lt;int&gt; sortedSquares(vector&lt;int&gt;&amp; A) {...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/977-Squares-of-a-Sorted-Array/",
        "teaser": null
      },{
        "title": "Find Words That Can Be Formed by Characters",
        "excerpt":"&lt;-E 1160&gt; Find Words That Can Be Formed by Characters class Solution { public: int countCharacters(vector&lt;string&gt;&amp; words, string chars) { string s; int umap[27]={}; for(int i=0;i&lt;chars.size();i++){ umap[chars[i]-'a']++; } int sum=0, k; for(int i=0; i&lt;words.size(); i++){ s=words[i]; k=0; int umap1[27]={}; for(int j=0; j&lt;s.size(); j++){ umap1[s[j]-'a']++; if(umap1[s[j]-'a'] &gt; umap[s[j]-'a']) break; k++; }...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1160-Find-Words-That-Can-Be-Formed-by-Characters/",
        "teaser": null
      },{
        "title": "Sort Array By Parity",
        "excerpt":"&lt;-E 905&gt; Sort Array By Parity // Method 1 class Solution { public: vector&lt;int&gt; sortArrayByParity(vector&lt;int&gt;&amp; A) { vector&lt;int&gt; ans(A.size(), 0); int index_front = 0; int index_pre = A.size() - 1; for(auto i : A) { if(!(i % 2)) { ans[index_front++] = i; } else ans[index_pre--] = i; } return ans;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/905-Sort-Array-By-Parity/",
        "teaser": null
      },{
        "title": "Matrix Diagonal Sum",
        "excerpt":"&lt;-E 1572&gt; Matrix Diagonal Sum class Solution { public: int diagonalSum(vector&lt;vector&lt;int&gt;&gt;&amp; mat) { int ans = 0; for(int i = 0; i != mat.size(); i++) { ans += mat[i][i]; ans += mat[i][mat.size() - i - 1]; } if(mat.size() % 2) return ans - mat[mat.size() / 2][mat.size() / 2]; return ans;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1572-Matrix-Diagonal-Sum/",
        "teaser": null
      },{
        "title": "Shortest Distance to a Character",
        "excerpt":"&lt;-E 821&gt; Shortest Distance to a Character class Solution { public: vector&lt;int&gt; shortestToChar(string S, char C) { vector&lt;int&gt; ans(S.size(), -1); vector&lt;int&gt; march; int index = 0; for(auto i : S) { if(i == C) { ans[index] = 0; march.push_back(index); } index++; } int add = 1; for(auto j : S)...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/821-Shortest-Distance-to-a-Character/",
        "teaser": null
      },{
        "title": "Relative Sort Array",
        "excerpt":"&lt;-E 1122&gt; Relative Sort Array class Solution { public: vector&lt;int&gt; relativeSortArray(vector&lt;int&gt;&amp; arr1, vector&lt;int&gt;&amp; arr2) { map&lt;int, int&gt; check; for(auto i : arr2) { check[i] = 0; } for(auto i : arr1) { check[i]++; } vector&lt;int&gt; ans; for(auto i : arr2) for(int j = 0; j &lt; check[i]; j++) ans.push_back(i); for(auto...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1122-Relative-Sort-Arrayy/",
        "teaser": null
      },{
        "title": "Count Good Triplets",
        "excerpt":"&lt;-E 1534&gt; Count Good Triplets class Solution { public: int countGoodTriplets(vector&lt;int&gt;&amp; arr, int a, int b, int c) { int len = arr.size(); int count = 0; for(int i = 0; i &lt; len; i++){ for(int j = i + 1; j &lt; len; j++){ for(int k = j +...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1534-Count-Good-Triplets/",
        "teaser": null
      },{
        "title": "Remove Outermost Parentheses",
        "excerpt":"&lt;-E 1021&gt; Remove Outermost Parentheses class Solution { public: string removeOuterParentheses(string S) { string ans = \"\"; int level = 0; for(auto c : S) { if (c == '(') { if (level++) { ans += '('; } } else { if (--level) { ans += ')'; } } }...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1021-Remove-Outermost-Parentheses/",
        "teaser": null
      },{
        "title": "Projection Area of 3D Shapes",
        "excerpt":"&lt;-E 883&gt; Projection Area of 3D Shapes class Solution { public: int projectionArea(vector&lt;vector&lt;int&gt;&gt;&amp; grid) { int res = 0; for (int i = 0; i &lt; grid.size(); ++i) { int r = 0, c = 0; for (int j = 0; j &lt; grid[0].size(); ++j) { if (grid[i][j]) ++res; r...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/883-Projection-Area-of-3D-Shapes/",
        "teaser": null
      },{
        "title": "Find Common Characters",
        "excerpt":"&lt;-E 1002&gt; Find Common Characters class Solution { public: vector&lt;string&gt; commonChars(vector&lt;string&gt;&amp; A) { vector&lt;char&gt; v1(26, 0); for (auto c : A[0]) v1[c - 'a']++; for (int id = 1; id &lt; A.size(); id++) { vector&lt;char&gt; v2(26, 0); for (auto c : A[id]) v2[c - 'a']++; for (int id = 0;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1002-Find-Common-Characters/",
        "teaser": null
      },{
        "title": "Unique Morse Code Words",
        "excerpt":"&lt;-E 804&gt; Unique Morse Code Words   class Solution { public:     int uniqueMorseRepresentations(vector&lt;string&gt;&amp; words) {          set&lt;string&gt; codes;         vector&lt;string&gt; morse = { \".-\",\"-...\",\"-.-.\",\"-..\",\".\",\"..-.\",\"--.\",\"....\",\"..\",\".---\",\"-.-\",\".-..\",\"--\",\"-.\",\"---\",\".--.\",\"--.-\",\".-.\",\"...\",\"-\",\"..-\",\"...-\",\".--\",\"-..-\",\"-.--\",\"--..\" };         for (string&amp; word: words) {             string code = \"\";             for (char c: word)                 code += morse[c - 'a'];             codes.insert(code);         }         return codes.size();          } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/804-Unique-Morse-Code-Words/",
        "teaser": null
      },{
        "title": "Average Salary Excluding the Minimum and Maximum Salary",
        "excerpt":"&lt;-E 1491&gt; Average Salary Excluding the Minimum and Maximum Salary class Solution { public: double average(vector&lt;int&gt;&amp; salary) { int min = INT_MAX, max = 0, sum = 0; for(int i=0;i&lt;salary.size();i++) { sum += salary[i]; if(salary[i] &gt; max) max = salary[i]; if(salary[i] &lt; min) min= salary[i]; } sum -= min +...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1491-Average-Salary-Excluding-the-Minimum-and-Maximum-Salary/",
        "teaser": null
      },{
        "title": "Range Sum of BST",
        "excerpt":"&lt;-E 938&gt; Range Sum of BST // Method 1 /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode *left,...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1938-Range-Sum-of-BST/",
        "teaser": null
      },{
        "title": "XOR Operation in an Array",
        "excerpt":"&lt;-E 1486&gt; XOR Operation in an Array   class Solution { public:     int xorOperation(int n, int start) {         int ans = start;     for(int i = 1; i &lt; n; i++){         ans ^= start + 2 * i;     }     return ans;     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1486-XOR-Operation-in-an-Array/",
        "teaser": null
      },{
        "title": "Peak Index in a Mountain Array",
        "excerpt":"&lt;-E 852&gt; Peak Index in a Mountain Array // Method 1 class Solution { public: int peakIndexInMountainArray(vector&lt;int&gt;&amp; arr) { int ans = -1; int check = arr[0]; for(auto i : arr) if(check &gt; i) return ans; else { ans++; check = i; } return ans; } }; // Method 2...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/852-Peak-Index-in-a-Mountain-Array/",
        "teaser": null
      },{
        "title": "Height Checker",
        "excerpt":"&lt;-E 1051&gt; Height Checker   class Solution { public:     int heightChecker(vector&lt;int&gt;&amp; heights) {                 vector check(heights.begin(), heights.end());         sort(heights.begin(), heights.end());         int count = 0;         for(int i = 0;i &lt; heights.size(); i++){             if(heights[i] != check[i]){                 count++;             }         }         return count;      } };    ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1051-Height-Checker/",
        "teaser": null
      },{
        "title": "Kids With the Greatest Number of Candies",
        "excerpt":"&lt;-E 1431&gt; Kids With the Greatest Number of Candies   class Solution { public:     vector&lt;bool&gt; kidsWithCandies(vector&lt;int&gt;&amp; candies, int extraCandies) {         vector&lt;bool&gt; ans;         int max = *max_element(candies.begin(), candies.end());         for(int i = 0; i != candies.size(); i++){             if(candies[i] + extraCandies &gt;= max){                 ans.push_back(true);             }             else{                 ans.push_back(false);             }         }         return ans;      } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/11431-Kids-With-the-Greatest-Number-of-Candies/",
        "teaser": null
      },{
        "title": "Build an Array With Stack Operations",
        "excerpt":"&lt;-E 1441&gt; Build an Array With Stack Operations //method1 class Solution { public: vector&lt;string&gt; buildArray(vector&lt;int&gt;&amp; target, int n) { vector&lt;string&gt; ans; int begin = 1; for(auto i : target) { if(i == begin) { ans.push_back(\"Push\"); begin++; } else { while(++begin &lt;= i) { ans.push_back(\"Push\"); ans.push_back(\"Pop\"); } ans.push_back(\"Push\"); } } return...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1441-Build-an-Array-With-Stack-Operations/",
        "teaser": null
      },{
        "title": "Shuffle String",
        "excerpt":"&lt;-E 1528&gt; Shuffle String //method1 class Solution { class Solution { public: string restoreString(string s, vector&lt;int&gt;&amp; indices) { char chrArray[101] = {}; for(int i = 0; i != s.size(); i++) { chrArray[indices[i]] = s[i]; } string ans = \"\"; for(int i = 0; i != s.size(); i++){ ans += chrArray[i];...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1528-Shuffle-String/",
        "teaser": null
      },{
        "title": "Design Parking System",
        "excerpt":"&lt;-E 1603&gt; Design Parking System class ParkingSystem { int b,m,s; public: ParkingSystem(int big, int medium, int small) { b=big; m=medium; s=small; } bool addCar(int carType) { bool result = true; switch(carType) { case 1: (b &lt;= 0)? result=false: --b; break; case 2: (m &lt;= 0)? result=false: --m; break; case 3:...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1603-Design-Parking-System/",
        "teaser": null
      },{
        "title": "Number of Recent Calls",
        "excerpt":"&lt;-E 933&gt; Number of Recent Calls class RecentCounter { public: queue&lt;int&gt; q; RecentCounter() { while(!q.empty()) q.pop(); } int ping(int t) { while(!q.empty() &amp;&amp; (t - q.front()) &gt; 3000) q.pop(); q.push(t); return q.size(); } }; /** * Your RecentCounter object will be instantiated and called as such: * RecentCounter* obj =...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/933-Number-of-Recent-Calls/",
        "teaser": null
      },{
        "title": "Minimum Subsequence in Non-Increasing Order",
        "excerpt":"&lt;-E 1403&gt; Minimum Subsequence in Non-Increasing Order // Method 1 class Solution { public: vector&lt;int&gt; minSubsequence(vector&lt;int&gt;&amp; nums) { int sum = accumulate(nums.begin(), nums.end(), 0); sort(nums.rbegin(), nums.rend()); vector&lt;int&gt; res; int sum_res = 0; int i = 0; while (sum_res &lt;= sum - sum_res &amp;&amp; i &lt; nums.size()) { res.push_back(nums[i]); sum_res +=...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1403-Minimum-Subsequence-in-Non-Increasing-Order/",
        "teaser": null
      },{
        "title": "Number of Good Pairs",
        "excerpt":"&lt;-E 1512&gt; Number of Good Pairs class Solution { public: int numIdenticalPairs(vector&lt;int&gt;&amp; nums) { int temp[101] = {0}; for(auto i : nums) { temp[i]++; } int ans = 0; for(int i = 0; i != 101; i++) { int times = 1; if(temp[i] &gt; 1) { times = temp[i] *...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1512-Number-of-Good-Pairs/",
        "teaser": null
      },{
        "title": "Running Sum of 1d Array",
        "excerpt":"&lt;-E 1480&gt; Running Sum of 1d Array   class Solution { public:     vector&lt;int&gt; runningSum(vector&lt;int&gt;&amp; nums) {                 for(int i=1;i&lt;nums.size();i++)             nums[i]+=nums[i-1];         return nums;     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1480-Running-Sum-of-1d-Array/",
        "teaser": null
      },{
        "title": "Can Make Arithmetic Progression From Sequence",
        "excerpt":"&lt;-E 1502&gt; Can Make Arithmetic Progression From Sequence   class Solution { public:     bool canMakeArithmeticProgression(vector&lt;int&gt;&amp; arr) {         sort(arr.begin(), arr.end());         int differ = arr[1] - arr[0];         for(int i = 2; i &lt; arr.size(); i++) {             if((arr[i] - arr[i - 1]) != differ)                 return false;         }         return true;     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1502-Can-Make-Arithmetic-Progression-From-Sequence/",
        "teaser": null
      },{
        "title": "Check If Two String Arrays are Equivalent",
        "excerpt":"&lt;-E 1662&gt; Check If Two String Arrays are Equivalent   class Solution { public:     bool arrayStringsAreEqual(vector&lt;string&gt;&amp; word1, vector&lt;string&gt;&amp; word2) {         string a = \"\",b = \"\";         for(auto x : word1)             a += x;         for(auto x : word2)             b += x;         return a == b;              } };    ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1662-Check-If-Two-String-Arrays-are-Equivalent/",
        "teaser": null
      },{
        "title": "Sort Array By Parity II",
        "excerpt":"&lt;-E 922&gt; Sort Array By Parity II class Solution { public: vector&lt;int&gt; sortArrayByParityII(vector&lt;int&gt;&amp; A) { vector&lt;int&gt; result(A.size(), 0); int even = 0; int odd = 1; for(auto c : A) { if(c % 2 == 0) { result[even] = c; even += 2; } else{ result[odd] = c; odd +=...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/922-Sort-Array-By-Parity-II/",
        "teaser": null
      },{
        "title": "Remove All Adjacent Duplicates In String",
        "excerpt":"&lt;-E 1047&gt; Remove All Adjacent Duplicates In String // Method 1 class Solution { public: string removeDuplicates(string S) { int n = S.size(); for(int i = 0;i &lt; n; i++){ if(S[i] == S[i+1]) { S = S.erase(i,2); n = S.size(); i = -1; } } return S; } }; //...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/11047-Remove-All-Adjacent-Duplicates-In-String/",
        "teaser": null
      },{
        "title": "Maximum Nesting Depth of the Parentheses",
        "excerpt":"&lt;-E 1614&gt; Maximum Nesting Depth of the Parentheses class Solution { public: int maxDepth(string s) { int ans = 0; int check = 0; for(auto i : s) { if(i == '(') { check++; } if(i == ')') { check--; } if(check &gt; ans) { ans = check; } }...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1614-Maximum-Nesting-Depth-of-the-Parentheses/",
        "teaser": null
      },{
        "title": "Sum of All Odd Length Subarrays",
        "excerpt":"&lt;-E 1588&gt; Sum of All Odd Length Subarrays // Method 1 class Solution { public: int sumOddLengthSubarrays(vector&lt;int&gt;&amp; arr) { int n = arr.size(); int result = 0; for(int i = 0; i &lt; n; i++){ result += arr[i] * (((i + 1)*(n - i) + 1) / 2); } return...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1588-Sum-of-All-Odd-Length-Subarrays/",
        "teaser": null
      },{
        "title": "Maximum Depth of N-ary Tree",
        "excerpt":"&lt;-E 559&gt; Maximum Depth of N-ary Tree /* // Definition for a Node. class Node { public: int val; vector&lt;Node*&gt; children; Node() {} Node(int _val) { val = _val; } Node(int _val, vector&lt;Node*&gt; _children) { val = _val; children = _children; } }; */ class Solution { public: int maxDepth(Node*...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/559-Maximum-Depth-of-N-ary-Tree/",
        "teaser": null
      },{
        "title": "Design an Ordered Stream",
        "excerpt":"&lt;-E 1656&gt; Design an Ordered Stream // Method 1 class OrderedStream { public: vector&lt;string&gt; pos; int ptr; OrderedStream(int n) { pos.resize(n + 1, \"\"); ptr = 1; } vector&lt;string&gt; insert(int id, string value) { //ptr+=1; pos[id] = value; vector&lt;string&gt; ans; int flag = 0; if(pos[ptr] != \"\") flag = 1;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1656-Design-an-Ordered-Stream/",
        "teaser": null
      },{
        "title": "Subdomain Visit Count",
        "excerpt":"&lt;-E 811&gt; Subdomain Visit Count // Method 1 class Solution { public: vector&lt;string&gt; subdomainVisits(vector&lt;string&gt;&amp; cpdomains) { std::map&lt;std::string, int&gt; fmap; std::vector&lt;std::string&gt; fvec; for(std::string s : cpdomains) { int len = s.length(); int pos1 = s.find_first_of(' '); int visit = std::stoi(s.substr(0, pos1)); int pos2 = pos1; while(pos2 != std::string::npos) { std::string in...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/811-Subdomain-Visit-Count/",
        "teaser": null
      },{
        "title": "Flipping an Image",
        "excerpt":"&lt;-E 832&gt; Flipping an Image // Method 1 class Solution { public: vector&lt;vector&lt;int&gt;&gt; flipAndInvertImage(vector&lt;vector&lt;int&gt;&gt;&amp; A) { if(A.empty()){ return A; } for (auto&amp; row : A) reverse(row.begin(), row.end()); for (auto&amp; row : A) for (int&amp; i: row) i ^= 1; return A; } }; // Method 2 class Solution { public:...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/832-Flipping-an-Image/",
        "teaser": null
      },{
        "title": "Delete Columns to Make Sorted",
        "excerpt":"&lt;-E 944&gt; Delete Columns to Make Sorted class Solution { public: int minDeletionSize(vector&lt;string&gt;&amp; A) { int n = A.size(), len = A[0].size(), res = 0; for (int j = 0; j &lt; len; ++j) { for (int i = 0; i &lt; n - 1; ++i) { if (A[i][j] &lt;=...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/944-Delete-Columns-to-Make-Sorted/",
        "teaser": null
      },{
        "title": "Sum of Root To Leaf Binary Numbers",
        "excerpt":"&lt;-E 1022&gt; Sum of Root To Leaf Binary Numbers /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode *left,...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1022-Sum-of-Root-To-Leaf-Binary-Numbers/",
        "teaser": null
      },{
        "title": "Destination City",
        "excerpt":"&lt;-E 1436&gt; Destination City   class Solution { public:     string destCity(vector&lt;vector&lt;string&gt;&gt;&amp; paths) {         unordered_map&lt;string, int&gt; map;         for(int i = 0; i &lt; paths.size(); i++){             map[paths[i][0]]++;         }                  for(int i = 0; i &lt; paths.size(); i++){             if(map[paths[i][1]] == 0)                  return paths[i][1];         }                    return NULL;     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1436-Destination-City/",
        "teaser": null
      },{
        "title": "Number of Students Doing Homework at a Given Time",
        "excerpt":"&lt;-E 1450&gt; Number of Students Doing Homework at a Given Time   class Solution { public:     int busyStudent(vector&lt;int&gt;&amp; startTime, vector&lt;int&gt;&amp; endTime, int queryTime) {         int ans = 0;         for(int i = 0; i != startTime.size(); i++) {             if(startTime[i] &lt;= queryTime)                 if(endTime[i] &gt;= queryTime)                     ans++;                              }         return ans;     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1450-Number-of-Students-Doing-Homework-at-a-Given-Time/",
        "teaser": null
      },{
        "title": "Special Array With X Elements Greater Than or Equal X",
        "excerpt":"&lt;-E 1608&gt; Special Array With X Elements Greater Than or Equal X class Solution { public: int specialArray(vector&lt;int&gt;&amp; nums) { sort(nums.begin(), nums.end()); int size = nums.size(); if (1 &lt;= size &amp;&amp; size &lt;= nums[0]) return size; for (int i = 1; i &lt; size; i++) { int left = size...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1608-Special-Array-With-X-Elements-Greater-Than-or-Equal-X/",
        "teaser": null
      },{
        "title": "Maximum Product of Two Elements in an Array",
        "excerpt":"&lt;-E 1464&gt; Maximum Product of Two Elements in an Array // Method 1 class Solution { public: int maxProduct(vector&lt;int&gt;&amp; nums) { if(nums.size() ==2){ return (nums[0] - 1) * (nums[1] - 1); } int firstMax ; int secondMax ; if( nums[0] &gt; nums[1]){ secondMax = nums[0]; firstMax = nums[1]; }else{ secondMax...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1464-Maximum-Product-of-Two-Elements-in-an-Array/",
        "teaser": null
      },{
        "title": "Transpose Matrix",
        "excerpt":"&lt;-E 867&gt; Transpose Matrix   class Solution { public:     vector&lt;vector&lt;int&gt;&gt; transpose(vector&lt;vector&lt;int&gt;&gt;&amp; A) {         vector&lt;vector&lt;int&gt;&gt; res(A[0].size(), vector&lt;int&gt;(A.size()));         for(int i = 0; i &lt; A.size(); i++){             for(int j = 0; j &lt; A[i].size(); j++){                 res[j][i] = A[i][j];             }         }         return res;     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/867-Transpose-Matrix/",
        "teaser": null
      },{
        "title": "Day of the Week",
        "excerpt":"&lt;-E 1185&gt; Day of the Week class Solution { public: string dayOfTheWeek(int day, int month, int year) { vector&lt;int&gt; mon{0,31,28,31,30,31,30,31,31,30,31,30,31}; vector&lt;string&gt; dayofweek{\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"}; int sum=4; for(int i=1971;i&lt;year;i++){ if((((i % 4 == 0) &amp;&amp; (i % 100 != 0)) || (i % 400 == 0))) sum+=366;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1185-Day-of-the-Week/",
        "teaser": null
      },{
        "title": "Check Array Formation Through Concatenation",
        "excerpt":"&lt;-E 1640&gt; Check Array Formation Through Concatenation   class Solution { public:     bool canFormArray(vector&lt;int&gt;&amp; arr, vector&lt;vector&lt;int&gt;&gt;&amp; pieces) {         for(auto i:pieces){             auto it=find(arr.begin(),arr.end(),i[0]);             if(it != arr.end()){                 for(auto j: i){                     if(*it != j)                         return false;                     it++;                 }             }             else                 return false;         }         return true;     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1640-Check-Array-Formation-Through-Concatenation/",
        "teaser": null
      },{
        "title": "Last Stone Weight",
        "excerpt":"&lt;-E 1046&gt; Last Stone Weight   class Solution { public:     int lastStoneWeight(vector&lt;int&gt;&amp; stones) {        priority_queue&lt;int&gt; pq(stones.begin(),stones.end());         while(pq.size() &gt;= 2){             int x = pq.top();             pq.pop();             int y = pq.top();             pq.pop();             if(x&gt;y)                 pq.push(x - y);         }         return pq.empty() ? 0 : pq.top();     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1046-Last-Stone-Weight/",
        "teaser": null
      },{
        "title": "Sort Array by Increasing Frequency",
        "excerpt":"&lt;-E 1636&gt; Sort Array by Increasing Frequency class Solution { public: vector&lt;int&gt; frequencySort(vector&lt;int&gt;&amp; nums) { unordered_map &lt;int, int&gt; ma; for (int i = 0 ; i &lt; nums.size(); i++) { ma[nums[i]]++; } vector &lt;pair &lt;int, int&gt; &gt; pa; for (auto it : ma) { pa.push_back({it.second, it.first}); } sort(pa.begin(), pa.end(), [](auto...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1636-Sort-Array-by-Increasing-Frequency/",
        "teaser": null
      },{
        "title": "Print in Order",
        "excerpt":"&lt;-E 1114&gt; Print in Order class Foo { public: Foo() { pthread_mutex_lock(&amp;m_second); pthread_mutex_lock(&amp;m_third); } ~Foo() { pthread_mutex_destroy(&amp;m_second); pthread_mutex_destroy(&amp;m_third); } void first(function&lt;void()&gt; printFirst) { // printFirst() outputs \"first\". Do not change or remove this line. printFirst(); pthread_mutex_unlock(&amp;m_second); } void second(function&lt;void()&gt; printSecond) { // printSecond() outputs \"second\". Do not change or remove...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1114-Print-in-Order/",
        "teaser": null
      },{
        "title": "String Matching in an Array",
        "excerpt":"&lt;-E 1408&gt; String Matching in an Array // Method 1 class Solution { public: vector&lt;string&gt; stringMatching(vector&lt;string&gt;&amp; words) { vector&lt;string&gt; s; for(int i = 0;i &lt; words.size(); i++) { for(int j = 0;j &lt; words.size(); j++) { if(j == i || words[i].size() &gt; words[j].size()) continue; if(words[j].find(words[i]) !=-1){ s.push_back(words[i]); break; } }...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1408-String-Matching-in-an-Array/",
        "teaser": null
      },{
        "title": "Trim a Binary Search Tree",
        "excerpt":"&lt;-E 669&gt; Trim a Binary Search Tree /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode *left, TreeNode *right)...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/669-Trim-a-Binary-Search-Tree/",
        "teaser": null
      },{
        "title": "Available Captures for Rook",
        "excerpt":"&lt;-E 999&gt; Available Captures for Rook class Solution { public: int numRookCaptures(vector&lt;vector&lt;char&gt;&gt;&amp; board) { int row = 0; int col = 0; for(auto i : board) { auto it = find(i.begin(), i.end(), 'R'); if(it != i.end()) { col = it - i.begin(); break; } row++; } int add = 1;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/999-Available-Captures-for-Rook/",
        "teaser": null
      },{
        "title": "Matrix Cells in Distance Order",
        "excerpt":"&lt;-E 1030&gt; Matrix Cells in Distance Order class Solution { public: vector&lt;vector&lt;int&gt;&gt; allCellsDistOrder(int R, int C, int r0, int c0) { vector&lt;vector&lt;int&gt;&gt; res; vector&lt;vector&lt;pair&lt;int, int&gt;&gt;&gt; vec(201); for (int i = 0; i &lt; R; ++i) { for (int j = 0; j &lt; C; ++j) { int dist = dis(i,...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1030-Matrix-Cells-in-Distance-Order/",
        "teaser": null
      },{
        "title": "Uncommon Words from Two Sentences",
        "excerpt":"&lt;-E 884&gt; Uncommon Words from Two Sentences class Solution { public: void addWords(unordered_map&lt;string,int&gt;&amp; m, const string&amp; s) { string t; for(auto i:s) { if(i==' ') { if(!t.empty()) { ++m[t]; t.clear(); } } else t+=i; } if(!t.empty()) ++m[t]; } vector&lt;string&gt; uncommonFromSentences(const string&amp; A, const string&amp; B) { unordered_map&lt;string,int&gt; m; addWords(m,A); addWords(m,B);...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/884-Uncommon-Words-from-Two-Sentences/",
        "teaser": null
      },{
        "title": "Special Positions in a Binary Matrix",
        "excerpt":"&lt;-E 1582&gt; Special Positions in a Binary Matrix class Solution { public: bool isSingle(const vector&lt;vector&lt;int&gt;&gt;&amp; mat,int row,int col) { int count=0; for(auto i:mat[row]) if(i and ++count&gt;1) return false; count=0; for(const auto&amp; i:mat) if(i[col] and ++count&gt;1) return false; return true; } int numSpecial(const vector&lt;vector&lt;int&gt;&gt;&amp; mat) { int count=0; for(int i=0; i&lt;mat.size();...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1582-Special-Positions-in-a-Binary-Matrix/",
        "teaser": null
      },{
        "title": "Univalued Binary Tree",
        "excerpt":"&lt;-E 965&gt; Univalued Binary Tree /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode *left, TreeNode *right) : val(x),...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/965-Univalued-Binary-Tree/",
        "teaser": null
      },{
        "title": "Prime Number of Set Bits in Binary Representation",
        "excerpt":"&lt;-E 762&gt; Prime Number of Set Bits in Binary Representation class Solution { public: int countPrimeSetBits(int L, int R) { int res = 0; for (int num = L; num &lt;= R; num++) { int cnt = __builtin_popcount(num); res += cnt &lt; 4 ? cnt &gt; 1 : (cnt %...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/762-Prime-Number-of-Set-Bits-in-Binary-Representation/",
        "teaser": null
      },{
        "title": "Middle of the Linked List",
        "excerpt":"&lt;-E 876&gt; Middle of the Linked List /** * Definition for singly-linked list. * struct ListNode { * int val; * ListNode *next; * ListNode() : val(0), next(nullptr) {} * ListNode(int x) : val(x), next(nullptr) {} * ListNode(int x, ListNode *next) : val(x), next(next) {} * }; */ class Solution...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/876-Middle-of-the-Linked-List/",
        "teaser": null
      },{
        "title": "Crawler Log Folder",
        "excerpt":"&lt;-E 1598&gt; Crawler Log Folder class Solution { public: int minOperations(vector&lt;string&gt;&amp; logs) { stack&lt;int&gt; s; for(int i = 0; i &lt; logs.size(); i++){ if(logs[i] == \"./\") continue; else if(logs[i] == \"../\"){ if(!s.empty()) s.pop(); } else s.push(1); } return s.size(); } }; class Solution { public: int minOperations(vector&lt;string&gt;&amp; logs) { int...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1598-Crawler-Log-Foldery/",
        "teaser": null
      },{
        "title": "Groups of Special-Equivalent Strings",
        "excerpt":"&lt;-E 893&gt; Groups of Special-Equivalent Strings   class Solution { public:     int numSpecialEquivGroups(vector&lt;string&gt;&amp; A) {         unordered_set&lt;string&gt; us;         for(auto i : A) {             string check(52,0);             for(int j = 0; j != i.size(); j++)                  check[i[j] - 'a' + 26 * (j%2)]++;                        us.insert(check);         }         return us.size();     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/893-Groups-of-Special-Equivalent-Strings/",
        "teaser": null
      },{
        "title": "Design HashSet",
        "excerpt":"&lt;-E 705&gt; Design HashSet class MyHashSet { public: vector&lt;bool&gt; set; /** Initialize your data structure here. */ MyHashSet() { set = vector&lt;bool&gt;(1000000,false); } void add(int key) { set[key] = true; } void remove(int key) { set[key] = false; } /** Returns true if this set contains the specified element */...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/705-Design-HashSet/",
        "teaser": null
      },{
        "title": "Design HashMap",
        "excerpt":"&lt;-E 706&gt; Design HashMap class MyHashMap { public: /** Initialize your data structure here. */ int hash(int key){ return (key%10000); } vector&lt;vector&lt;pair&lt;int,int&gt;&gt;&gt;map; MyHashMap() { map.resize(10000,{}); } /** value will always be non-negative. */ void put(int key, int value) { int hash_val = hash(key); for(int i = 0 ; i &lt;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/706-Design-HashMap/",
        "teaser": null
      },{
        "title": "Divisor Game",
        "excerpt":"&lt;-E 1025&gt; Divisor Game // Method 1 class Solution { public: bool divisorGame(int N) { if(N % 2 == 0) return true; else return false; } }; // Method 2 class Solution { public: int dp[1001] ; int help(int N) { if(N == 1) return 0; if(dp[N] != -1) return...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1025-Divisor-Game/",
        "teaser": null
      },{
        "title": "Occurrences After Bigram",
        "excerpt":"&lt;-E 1078&gt; Occurrences After Bigram class Solution { public: vector&lt;string&gt; findOcurrences(string text, string first, string second) { vector&lt;string&gt; result; stringstream ss(text); string token1, token2, token3; while(!ss.eof()) { ss &gt;&gt; token3; if (token1 == first &amp;&amp; token2 == second) result.push_back(token3); token1 = std::move(token2), token2 = std::move(token3); } return result; } };...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1078-Occurrences-After-Bigram/",
        "teaser": null
      },{
        "title": "Count Largest Group",
        "excerpt":"&lt;-E 1399&gt; Count Largest Group // Method 1 class Solution { public: int findDigitsSum(int x){ int sum = 0; while(x != 0){ sum += (x % 10); x /= 10; } return sum; } int countLargestGroup(int n) { unordered_map&lt;int, int&gt; umap; int maxi = 0; for(int i = 1; i...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1399-Count-Largest-Group/",
        "teaser": null
      },{
        "title": "Minimum Value to Get Positive Step by Step Sum",
        "excerpt":"&lt;-E 1413&gt; Minimum Value to Get Positive Step by Step Sum // Method 1 class Solution { public: int minStartValue(vector&lt;int&gt;&amp; nums) { int s = 0; int minSum = 0; for (int num : nums) { s += num; if (s &lt; minSum) { minSum = s; } } return...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1413-Minimum-Value-to-Get-Positive-Step-by-Step-Sum/",
        "teaser": null
      },{
        "title": "Check If a Word Occurs As a Prefix of Any Word in a Sentence",
        "excerpt":"&lt;-E 1455&gt; Check If a Word Occurs As a Prefix of Any Word in a Sentence class Solution { public: int isPrefixOfWord(string sentence, string searchWord) { stringstream s(sentence); string word; int count = 1; while(s &gt;&gt; word){ if (word.substr(0,searchWord.size()) == searchWord){ return count; } count+= 1; } return -1; }...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1455-Check-If-a-Word-Occurs-As-a-Prefix-of-Any-Word-in-a-Sentence/",
        "teaser": null
      },{
        "title": "Three Consecutive Odds",
        "excerpt":"&lt;-E 1550&gt; Three Consecutive Odds class Solution { public: bool threeConsecutiveOdds(vector&lt;int&gt;&amp; arr) { if(arr.size()&lt;2) return false; for(int i = 0; i &lt; arr.size() - 2;i++){ if(arr[i] % 2 != 0 &amp;&amp; arr[i + 1] % 2 != 0 &amp;&amp; arr[i + 2] % 2 !=0) return true; } return false;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1550-Three-Consecutive-Odds-copy/",
        "teaser": null
      },{
        "title": "Mean of Array After Removing Some Elements",
        "excerpt":"&lt;-E 1619&gt; Mean of Array After Removing Some Elements class Solution { public: double trimMean(vector&lt;int&gt;&amp; arr) { sort(arr.begin(), arr.end()); int num = arr.size() *.05; double sum = 0; double count = 0; for(int i = num; i &lt; arr.size() - num; i++){ sum += arr[i]; count++; } return sum /...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1619-Mean-of-Array-After-Removing-Some-Elements/",
        "teaser": null
      },{
        "title": "Invert Binary Tree",
        "excerpt":"&lt;-E 226&gt; Invert Binary Tree // Method 1 /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode *left, TreeNode...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/226-Invert-Binary-Tree/",
        "teaser": null
      },{
        "title": "Delete Node in a Linked List",
        "excerpt":"&lt;-E 237&gt; Delete Node in a Linked List /** * Definition for singly-linked list. * struct ListNode { * int val; * ListNode *next; * ListNode(int x) : val(x), next(NULL) {} * }; */ class Solution { public: void deleteNode(ListNode* node) { auto nxt=node-&gt;next; *node=*nxt; delete nxt; } }; class...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/237-Delete-Node-in-a-Linked-List/",
        "teaser": null
      },{
        "title": "Intersection of Two Arrays",
        "excerpt":"&lt;-E 349&gt; Intersection of Two Arrays // Method 1 class Solution { public: vector&lt;int&gt; intersection(vector&lt;int&gt;&amp; nums1, vector&lt;int&gt;&amp; nums2) { map&lt;int, int&gt; check; for(auto i : nums1) { check[i]++; } set&lt;int&gt; output; for(auto i : nums2) { if(check.find(i) != check.end()) output.insert(i); } vector&lt;int&gt; ans(output.begin(),output.end()); return ans; } }; // Method 2...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/349-Intersection-of-Two-Arrays/",
        "teaser": null
      },{
        "title": "Average of Levels in Binary Tree",
        "excerpt":"&lt;-E 637&gt; Average of Levels in Binary Tree /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode *left, TreeNode...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/637-Average-of-Levels-in-Binary-Tree/",
        "teaser": null
      },{
        "title": "Baseball Game",
        "excerpt":"&lt;-E 682&gt; Baseball Game   class Solution { public:     int calPoints(vector&lt;string&gt;&amp; ops) {        vector&lt;int&gt; s;         for(auto i : ops){             if(i == \"+\")                 s.push_back(s[s.size()-1]+s[s.size()-2]);             else if(i == \"D\")                 s.push_back(s[s.size()-1]*2);             else if(i == \"C\")                 s.pop_back();             else s.push_back(stoi(i));         }         return accumulate(s.begin(),s.end(),0);     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/682-Baseball-Game/",
        "teaser": null
      },{
        "title": "Toeplitz Matrix",
        "excerpt":"&lt;-E 766&gt; Toeplitz Matrix   class Solution { public:     bool isToeplitzMatrix(vector&lt;vector&lt;int&gt;&gt;&amp; matrix) {         for(int i = 1; i &lt; matrix.size(); i++)             for(int j = 1; j &lt; matrix[1].size(); j++)                 if(matrix[i][j] != matrix[i-1][j-1])                     return false;         return true;     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/766-Toeplitz-Matrix/",
        "teaser": null
      },{
        "title": "Number of Lines To Write String",
        "excerpt":"&lt;-E 806&gt; Number of Lines To Write String class Solution { public: vector&lt;int&gt; numberOfLines(vector&lt;int&gt;&amp; widths, string S) { int W = 0, L = 1; for(auto i:S) { W += widths[i - 'a']; if(100 &lt; W) { W = widths[i - 'a']; L++; } } return {L, W}; } };...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/806-Number-of-Lines-To-Write-String/",
        "teaser": null
      },{
        "title": "Leaf-Similar Trees",
        "excerpt":"&lt;-E 872&gt; Leaf-Similar Trees /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left),...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/872-Leaf-Similar-Trees/",
        "teaser": null
      },{
        "title": "Smallest Range I",
        "excerpt":"&lt;-E 908&gt; Smallest Range I   class Solution { public:     int smallestRangeI(vector&lt;int&gt;&amp; A, int K) {         return max(0, *max_element(A.begin(), A.end()) - K - (*min_element(A.begin(), A.end()) + K));     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/908-Smallest-Range-I/",
        "teaser": null
      },{
        "title": "Richest Customer Wealth",
        "excerpt":"&lt;-E 1672&gt; Richest Customer Wealth   class Solution { public:     int maximumWealth(vector&lt;vector&lt;int&gt;&gt;&amp; accounts) {         int ans = -1;         for(auto i : accounts){             ans = max(accumulate(i.begin(), i.end(), 0), ans);         }         return ans;     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1672-Richest-Customer-Wealth/",
        "teaser": null
      },{
        "title": "Goal Parser Interpretation",
        "excerpt":"&lt;-E 1678&gt; Goal Parser Interpretation class Solution { public: string interpret(string command) { string ans = \"\"; int i = 0; int size = command.size(); while(i &lt; size) { if(command[i] == 'G') { i++; ans += \"G\"; } else if(command[i] == '(') { if(command[i + 1] == ')') { i...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1678-Goal-Parser-Interpretation/",
        "teaser": null
      },{
        "title": "Goal Parser Interpretation",
        "excerpt":"&lt;-E 1678&gt; Goal Parser Interpretation // Method 1 class Solution { public: int distributeCandies(vector&lt;int&gt;&amp; candyType) { set&lt;int&gt; check; int max = candyType.size() / 2; for(auto i : candyType) { check.insert(i); if(check.size() &gt; max) return max; } return check.size(); } }; // Method 2 class Solution { public: int distributeCandies(vector&lt;int&gt;&amp; candies)...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/575-Distribute-Candies/",
        "teaser": null
      },{
        "title": "Goat Latin",
        "excerpt":"&lt;-E 824&gt; Goat Latin class Solution { public: string toGoatLatin(string S) { unordered_set&lt;char&gt; vowel({'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'}); istringstream iss(S); string res, w; int i = 0; while (iss &gt;&gt; w) { res += \" \"; if (vowel.count(w[0]) != 0) { res += w; }...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/824-Goat-Latin/",
        "teaser": null
      },{
        "title": "Consecutive Characters",
        "excerpt":"&lt;-E 1446&gt; Consecutive Characters class Solution { public: int maxPower(string s) { int c = 0; int max = 0; for(int i = 0; i &lt; s.length(); ++i){ if(s[i + 1] == s[i]) c++; else{ if(c &gt; max) max = c; c = 0; } } return ++max; } };...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1446-Consecutive-Characters/",
        "teaser": null
      },{
        "title": "Reformat Date",
        "excerpt":"&lt;-E 1507&gt; Reformat Date class Solution { public: string reformatDate(string date) { int n = date.length(); vector&lt;string&gt;arr{\"Jan\",\"Feb\",\"Mar\",\"Apr\",\"May\",\"Jun\",\"Jul\",\"Aug\",\"Sep\",\"Oct\",\"Nov\",\"Dec\"}; string m,d,y; for(int i=0 ; i&lt;12 ; i++) if(date.find(arr[i])!=string::npos) m = to_string(i+1); if(m.length()&lt;2) m = \"0\"+m; y = date.substr(n-4,n); for(int i=0 ; i&lt;3 ; i++) { if(isdigit(date[i])) d += date[i]; else break; }...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1507-Reformat-Date/",
        "teaser": null
      },{
        "title": "Sum of Even Numbers After Queries",
        "excerpt":"&lt;-E 985&gt; Sum of Even Numbers After Queries class Solution { public: vector&lt;int&gt; sumEvenAfterQueries(vector&lt;int&gt;&amp; A, vector&lt;vector&lt;int&gt;&gt;&amp; queries) { vector&lt;int&gt; res(queries.size()); int sum = accumulate(A.begin(), A.end(), 0, [](int sum, int n) { return n % 2 == 0 ? sum + n : sum; }); for (int i = 0; i...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/985-Sum-of-Even-Numbers-After-Queries/",
        "teaser": null
      },{
        "title": "Largest Substring Between Two Equal Characters",
        "excerpt":"&lt;-E 1624&gt; Largest Substring Between Two Equal Characters class Solution { public: int maxLengthBetweenEqualCharacters(string s) { int len = -1; unordered_map&lt;char,int&gt; umap; for(int i = 0;i &lt; s.size(); i++){ if(umap.find(s[i]) != umap.end()){ len = max(len, i - umap[s[i]] -1); } else{ umap[s[i]] = i; } } return len; } };...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1624-Largest-Substring-Between-Two-Equal-Characters/",
        "teaser": null
      },{
        "title": "Complement of Base 10 Integer",
        "excerpt":"&lt;-E 1009&gt; Complement of Base 10 Integer class Solution { public: int bitwiseComplement(int N) { if(N == 0) return 1; long long int n1, n2; n1 = log2(N) + 1; n2 = pow(2, n1) - 1; return N ^ n2; } }; class Solution { public: int bitwiseComplement(int N) {...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1009-Complement-of-Base-10-Integer/",
        "teaser": null
      },{
        "title": "Water Bottles",
        "excerpt":"&lt;-E 1518&gt; Water Bottles   class Solution { public:     int numWaterBottles(int numBottles, int numExchange) {         int s = numBottles,l = 0,p;         while((numBottles / numExchange) &gt; 0)         {             p = (numBottles / numExchange);             l = (numBottles % numExchange);             s += p;             numBottles = p + l;         }         return s;     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1518-Water-Bottles/",
        "teaser": null
      },{
        "title": "Reshape the Matrix",
        "excerpt":"&lt;-E 566&gt; Reshape the Matrix class Solution { public: vector&lt;vector&lt;int&gt;&gt; matrixReshape(vector&lt;vector&lt;int&gt;&gt;&amp; nums, int r, int c) { int m = nums.size(); int n = nums[0].size(); if(r * c != m * n) return nums; vector&lt;vector&lt;int&gt;&gt;res(r,vector&lt;int&gt;(c,0)); int column = 0; int row = 0; for(int i = 0; i &lt; m;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/566-Reshape-the-Matrix/",
        "teaser": null
      },{
        "title": "Binary Number with Alternating Bits",
        "excerpt":"&lt;-E 693&gt; Binary Number with Alternating Bits class Solution { public: bool hasAlternatingBits(int n) { bitset&lt;32&gt; bit(n); string s = bit.to_string(); int pos = 0; while(s[pos++] == '0'); char check = s[pos - 1]; for(int i = pos; i != s.size(); i++) { if(check == s[i]) { return false; }...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/693-Binary-Number-with-Alternating-Bits/",
        "teaser": null
      },{
        "title": "Binary Gap",
        "excerpt":"&lt;-E 868&gt; Binary Gap class Solution { public: int binaryGap(int n) { string str = bitset&lt;64&gt;(n).to_string(); int dist = 0, pre = -1; for (auto i = 0; i &lt; 64; i++) { if (str[i] != '0') { if (pre == -1) pre = i; else dist = max(dist, i...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/868-Binary-Gap/",
        "teaser": null
      },{
        "title": "Largest Perimeter Triangle",
        "excerpt":"&lt;-E 976&gt; Largest Perimeter Triangle // Method 1 class Solution { public: int largestPerimeter(vector&lt;int&gt;&amp; A) { sort(A.begin(), A.end()); for(int i = A.size() - 1; i &gt;= 2; i--) { if(A[i] &lt; A[i-1] + A[i-2]) return A[i] + A[i-1] + A[i-2]; } return 0; } }; // Method 2 class Solution...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/976-Largest-Perimeter-Triangle/",
        "teaser": null
      },{
        "title": "Rotated Digits",
        "excerpt":"&lt;-E 788&gt; Rotated Digits class Solution { public: bool good(int x){ int y; bool rotated=false; while(x &gt; 0){ y=x % 10; switch(y){ case 0: case 1: case 8: break; case 2: case 5: case 6: case 9: rotated = true; break; default: return false; } x = x / 10;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/788-Rotated-Digits/",
        "teaser": null
      },{
        "title": "Shortest Completing Word",
        "excerpt":"&lt;-E 748&gt; Shortest Completing Word // Method 1 class Solution { public: string shortestCompletingWord(string licensePlate, vector&lt;string&gt;&amp; words) { int storelp[26]={0}; //to store count of chars in licensePlate string for(int i = 0; i &lt; licensePlate.size(); i++){ if(isalpha(licensePlate[i])){ storelp[tolower(licensePlate[i]) - 'a'] += 1; } } string res = \"\"; int minsize...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/748-Shortest-Completing-Word/",
        "teaser": null
      },{
        "title": "Rank Transform of an Array",
        "excerpt":"&lt;-E 1331&gt; Rank Transform of an Array // Method 1 class Solution { public: vector&lt;int&gt; arrayRankTransform(vector&lt;int&gt;&amp; arr) { set&lt;int&gt; s(arr.begin(), arr.end()); unordered_map&lt;int, int&gt; m; int r = 0; vector&lt;int&gt; ans; for (auto a : s) m[a] = ++r; for (auto a : arr) { ans.push_back(m[a]); } return ans; } };...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1331-Rank-Transform-of-an-Array/",
        "teaser": null
      },{
        "title": "Thousand Separator",
        "excerpt":"&lt;-E 1556&gt; Thousand Separator   class Solution { public:     string thousandSeparator(int n) {         string num = to_string(n);          for (int i = num.length() - 1, j = 1; i &gt; 0; --i, ++j) {              if (j % 3 == 0) {                 num.insert(num.begin() + i, '.');             }         }         return num;     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1556-Thousand-Separator/",
        "teaser": null
      },{
        "title": "Maximize Sum Of Array After K Negations",
        "excerpt":"&lt;-E 1005&gt; Maximize Sum Of Array After K Negations class Solution { public: int largestSumAfterKNegations(vector&lt;int&gt;&amp; A, int K) { sort(A.begin(), A.end()); int i; for(i=0;i&lt;A.size() &amp;&amp; K;i++) { if(A[i]&lt;0) { A[i] = abs(A[i]); K--; } else { break; } } K = K%2; if(K) { int m = min_element(A.begin(), A.end()) -...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1005-Maximize-Sum-Of-Array-After-K-Negations/",
        "teaser": null
      },{
        "title": "Compare Strings by Frequency of the Smallest Character",
        "excerpt":"&lt;-E 1170&gt; Compare Strings by Frequency of the Smallest Character class Solution { public: vector&lt;int&gt; numSmallerByFrequency(const vector&lt;string&gt;&amp; queries, const vector&lt;string&gt;&amp; words) { if (queries.empty() || words.empty()) { return {}; } vector&lt;int&gt; vqf(queries.size()); for (size_t i = 0; i &lt; queries.size(); ++i) { vqf[i] = frequency(queries[i]); } vector&lt;int&gt; vwf(words.size()); for (size_t...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1170-Compare-Strings-by-Frequency-of-the-Smallest-Character/",
        "teaser": null
      },{
        "title": "Slowest Key",
        "excerpt":"&lt;-E 1629&gt; Slowest Key class Solution { public: char slowestKey(vector&lt;int&gt;&amp; releaseTimes, string keysPressed) { int prevtime = 0; int currenttime; int maxtime = 0; char maxkey; for(int i = 0;i &lt; releaseTimes.size(); i++) { currenttime = releaseTimes[i] - prevtime; if(maxtime &lt; currenttime) { maxtime = currenttime; maxkey = keysPressed[i]; }...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1629-Slowest-Key/",
        "teaser": null
      },{
        "title": "Count the Number of Consistent Strings",
        "excerpt":"&lt;-E 1684&gt; Count the Number of Consistent Strings class Solution { public: int countConsistentStrings(string allowed, vector&lt;string&gt;&amp; words) { vector&lt;int&gt; letters(26,-1); for(int i = 0; i &lt; allowed.size(); ++i) letters[allowed[i] - 'a'] = 0; int count = 0; for(auto word : words) { int i = 0; for(; i &lt; word.size();...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1684-Count-the-Number-of-Consistent-Strings/",
        "teaser": null
      },{
        "title": "Count of Matches in Tournament",
        "excerpt":"&lt;-E 1688&gt; Count of Matches in Tournament   class Solution { public:     int numberOfMatches(int n) {         int matches = 0;                  int crm = -1;         while(crm != 0){             crm = n / 2;             matches += crm;             n = (n + 1) / 2;         }                  return matches;     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1688-Count-of-Matches-in-Tournament/",
        "teaser": null
      },{
        "title": "Sum of Left Leaves",
        "excerpt":"&lt;-E 404&gt; Sum of Left Leaves /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode *left, TreeNode *right) :...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/404-Sum-of-Left-Leaves/",
        "teaser": null
      },{
        "title": "Largest Triangle Area",
        "excerpt":"&lt;-E 812&gt; Largest Triangle Area class Solution { public: double largestTriangleArea(vector&lt;vector&lt;int&gt;&gt;&amp; points) { double res = 0; for (int i=0;i &lt; points.size()-2;i++){ for (int j=i+1;j&lt; points.size()-1;j++){ for (int k=j+1;k&lt;points.size();k++){ res = max(res, 0.5 * abs(points[i][0] * points[j][1] + points[j][0] * points[k][1] + points[k][0] * points[i][1] - points[j][0] * points[i][1] -...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/812-Largest-Triangle-Area/",
        "teaser": null
      },{
        "title": "Fair Candy Swap",
        "excerpt":"&lt;-E 888&gt; Fair Candy Swap   class Solution { public:     vector&lt;int&gt; fairCandySwap(const vector&lt;int&gt;&amp; a, vector&lt;int&gt;&amp; b) {         int diff=(accumulate(a.begin(),a.end(),0)-accumulate(b.begin(),b.end(),0))/2;         sort(b.begin(),b.end());         for(auto i : a)             if(binary_search(b.begin(),b.end(),i-diff)) return {i,i-diff};         return {0,0};     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/888-Fair-Candy-Swap/",
        "teaser": null
      },{
        "title": "Surface Area of 3D Shapes",
        "excerpt":"&lt;-E 892&gt; Surface Area of 3D Shapes class Solution { public: int surfaceArea(vector&lt;vector&lt;int&gt;&gt;&amp; grid) { int n = grid.size(), res = 0; for (int i = 0; i &lt; n; ++i) { for (int j = 0; j &lt; n; ++j) { if (grid[i][j] &gt; 0) res += 4 *...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/892-Surface-Area-of-3D-Shapes/",
        "teaser": null
      },{
        "title": "Reverse Only Letters",
        "excerpt":"&lt;-E 917&gt; Reverse Only Letters class Solution { public: string reverseOnlyLetters(string S) { int len = S.length(); string ans = \"\"; int j = len - 1; for(int i = 0; i &lt; len; i++) { if(isalpha(S[i])) { while(j &gt;= 0 &amp;&amp; !isalpha(S[j])) j -= 1; ans += S[j]; j...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/917-Reverse-Only-Letters/",
        "teaser": null
      },{
        "title": "Binary Tree Tilt",
        "excerpt":"&lt;-E 563&gt; Binary Tree Tilt /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode *left, TreeNode *right) : val(x),...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/563-Binary-Tree-Tilt/",
        "teaser": null
      },{
        "title": "Binary Tree Paths",
        "excerpt":"&lt;-E 257&gt; Binary Tree Paths /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode *left, TreeNode *right) : val(x),...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/257-Binary-Tree-Paths/",
        "teaser": null
      },{
        "title": "Binary Prefix Divisible By 5",
        "excerpt":"&lt;-E 1018&gt; Binary Prefix Divisible By 5   class Solution { public:     vector&lt;bool&gt; prefixesDivBy5(vector&lt;int&gt;&amp; A) {         int n=A.size();         vector&lt;bool&gt;result(n,false);         int val = 0;         for(int i = 0; i &lt; n; i++){             if(!((val= val * 2 + A[i]) %= 5))                 result[i] = true;         }         return result;     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1018-Binary-Prefix-Divisible-By-5/",
        "teaser": null
      },{
        "title": "Duplicate Zeros",
        "excerpt":"&lt;-E 1089&gt; Duplicate Zeros // Method 1 class Solution { public: void duplicateZeros(vector&lt;int&gt;&amp; arr) { for(int i=0; i &lt; arr.size(); i++) if(arr[i] == 0) { for(int j=arr.size()-1; j &gt; i; j--) arr[j] = arr[j-1]; i++; } } }; // Method 2 class Solution { public: void duplicateZeros(vector&lt;int&gt;&amp; arr) { const...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1089-Duplicate-Zeros/",
        "teaser": null
      },{
        "title": "Kth Missing Positive Number",
        "excerpt":"&lt;-E 1539&gt; Kth Missing Positive Number   class Solution { public:     int findKthPositive(vector&lt;int&gt;&amp; arr, int k) {         int index = 0;         for(int i = 1; i != arr.back(); i++) {             if(i == arr[index])                 index++;             else                 k--;             if(k == 0)                 return i;         }         return arr.back() + k;         } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1539-Kth-Missing-Positive-Number/",
        "teaser": null
      },{
        "title": "Replace All ?'s to Avoid Consecutive Repeating Characters",
        "excerpt":"&lt;-E 1576&gt; Replace All ?’s to Avoid Consecutive Repeating Characters class Solution { public: string modifyString(string s) { char f, b = ' '; for(int i=0;i&lt;s.size();i++) { if(i != 0) b = s[i-1]; f = s[i+1]; if(s[i] == '?') s[i] = 'a'; while(s[i] == b || s[i] == f) s[i]++;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1576-Replace-All-to-Avoid-Consecutive-Repeating-Characters/",
        "teaser": null
      },{
        "title": "Binary Search",
        "excerpt":"&lt;-E 704&gt; Binary Search class Solution { public: int search(vector&lt;int&gt;&amp; nums, int target) { int low = 0, high = nums.size(), mid; while (low &lt; high){ mid = low + (high - low) / 2; if (nums[mid] == target) return mid; else if (nums[mid] &gt; target) high = mid; else...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1704-Binary-Search/",
        "teaser": null
      },{
        "title": "Degree of an Array",
        "excerpt":"&lt;-E 697&gt; Degree of an Array class Solution { public: int findShortestSubArray(vector&lt;int&gt;&amp; nums) { unordered_map&lt;int,vector&lt;int&gt;&gt; map; for(int i=0; i &lt; nums.size(); i++) { if(map.count(nums[i])==0) { map[nums[i]] = {0,i,i}; } map[nums[i]][0] += 1; map[nums[i]][2] = i; } int degree = 0; int res = 0; for(auto key : map){ if(key.second[0] &gt;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/697-Degree-of-an-Array/",
        "teaser": null
      },{
        "title": "Rotate String",
        "excerpt":"&lt;-E 796&gt; Rotate String   class Solution { public:     bool rotateString(string str1, string str2) {         if (str1.length() != str2.length())          return false;            string temp = str1 + str1;          return (temp.find(str2) != string::npos);      } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/796-Rotate-String/",
        "teaser": null
      },{
        "title": "Verifying an Alien Dictionary",
        "excerpt":"&lt;-E 953&gt; Verifying an Alien Dictionary class Solution { public: bool isAlienSorted(vector&lt;string&gt;&amp; words, string order) { int ord[26]; for (int i = 0; i &lt; order.size(); ++i) { ord[order[i] - 'a'] = i; } for (int i = 0; i &lt; words.size()-1; ++i) { if (!checkTwo(words[i], words[i+1], ord)) return false;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/953-Verifying-an-Alien-Dictionary/",
        "teaser": null
      },{
        "title": "N-th Tribonacci Number",
        "excerpt":"&lt;-E 1137&gt; N-th Tribonacci Number   class Solution { public:     int tribonacci(int n) {         int f[38];         f[0]=0;         f[1]=1;         f[2]=1;         for (int i=3;i&lt;=n;i++) {             f[i]=f[i-1]+f[i-2]+f[i-3];         }         return f[n];     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1137-N-th-Tribonacci-Number/",
        "teaser": null
      },{
        "title": "Reformat The String",
        "excerpt":"&lt;-E 1417&gt; Reformat The String class Solution { public: string reformat(string s) { string ans(s.size(), ' '); int charnum = 0; int num = 0; bool flag = false; for (auto i : s) { if(isalpha(i)) charnum++; else num++; } if (abs(num - charnum) &gt; 1) return \"\"; int index_num;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/11417-Reformat-The-String/",
        "teaser": null
      },{
        "title": "Day of the Year",
        "excerpt":"&lt;-E 1154&gt; Day of the Year class Solution { public: bool isLeap(int y){ return (y % 4 == 0 &amp;&amp; y % 100 != 0) || (y % 400 == 0); } int getMonth(int m,int y){ if(m==1 || m==3 || m==5 || m==7 || m==8 || m==10 || m==12) return...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1154-Day-of-the-Year/",
        "teaser": null
      },{
        "title": "Maximum Score After Splitting a String",
        "excerpt":"&lt;-E 1422&gt; Maximum Score After Splitting a String class Solution { public: int maxScore(const string&amp; s) { int one = count(s.begin(), s.end(), '1'); int zero = 0; int score = 0; for(int i = 0; i&lt;s.size() - 1; ++i) score = (s[i] =='0') ? max(score, ++zero + one) : max(score,...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1422-Maximum-Score-After-Splitting-a-String/",
        "teaser": null
      },{
        "title": "Path Crossing",
        "excerpt":"&lt;-E 1496&gt; Path Crossing class Solution { public: bool isPathCrossing(const string&amp; path) { unordered_set&lt;string&gt; us; us.insert(\"0.0\"); const string point {\".\"}; int x = 0, y = 0; for(auto i : path) { switch(i) { case'N': ++y; break; case'S': --y; break; case'E': --x; break; case'W': ++x; break; } string s {to_string(x)+point+to_string(y)};...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1496-Path-Crossing/",
        "teaser": null
      },{
        "title": "Most Visited Sector in a Circular Track",
        "excerpt":"&lt;-E 1560&gt; Most Visited Sector in a Circular Track class Solution { public: vector&lt;int&gt; mostVisited(int n, vector&lt;int&gt;&amp; rounds) { vector&lt;int&gt; res; if(rounds[0] &lt;= rounds.back()) { for(int i = rounds[0]; i &lt;= rounds.back(); i++) { res.push_back(i); } } else { for(int i = 1; i &lt;= n; i++) { if(i &gt;=...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1560-Most-Visited-Sector-in-a-Circular-Track/",
        "teaser": null
      },{
        "title": "Two Sum IV - Input is a BST",
        "excerpt":"&lt;-E 653&gt; Two Sum IV - Input is a BST /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/653-Two-Sum-IV-Input-is-a-BST/",
        "teaser": null
      },{
        "title": "Employee Importance",
        "excerpt":"&lt;-E 690&gt; Employee Importance /* // Definition for Employee. class Employee { public: int id; int importance; vector&lt;int&gt; subordinates; }; */ // Method 1 class Solution { public: int getImportance(vector&lt;Employee*&gt; employees, int id) { unordered_map&lt;int, Employee*&gt;m; for(auto x: employees) m[x-&gt;id] = x; int sum = 0; deque&lt;Employee*&gt; q; q.push_back(m[id]); while(!q.empty())...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/690-Employee-Importance/",
        "teaser": null
      },{
        "title": "Count Binary Substrings",
        "excerpt":"&lt;-E 696&gt; Count Binary Substrings // Method 1 class Solution { public: int countBinarySubstrings(string s) { int ans = 0, previous = 0, current = 1; for(int i = 1 ; i &lt; s.size() ; i++){ if(s[i] == s[i-1]) current++; else{ previous = current; current = 1; } if(current &lt;=...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/696-Count-Binary-Substrings/",
        "teaser": null
      },{
        "title": "Flood Fill",
        "excerpt":"&lt;-E 733&gt; Flood Fill class Solution { public: vector&lt;vector&lt;int&gt;&gt; floodFill(vector&lt;vector&lt;int&gt;&gt;&amp; image, int sr, int sc, int newColor) { int prevColor = image[sr][sc]; dfs(image, sr, sc, prevColor, newColor); return image; } void dfs(vector&lt;vector&lt;int&gt;&gt;&amp; image, int sr, int sc, int prevColor, int newColor){ if(sr&lt;0 || sr&gt;=image.size() || sc&lt;0 || sc&gt;=image[0].size()){ return; }...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/733-Flood-Filly/",
        "teaser": null
      },{
        "title": "Pascal's Triangle",
        "excerpt":"&lt;-E 118&gt; Pascal’s Triangle   class Solution { public:     vector&lt;vector&lt;int&gt;&gt; generate(int numRows) {         vector&lt;vector&lt;int&gt;&gt; answer;         for(int i = 1; i &lt;= numRows; i++) {             vector&lt;int&gt; sub(i,1);             for(int j = 1; j &lt; i - 1; j++) {                 sub[j] = answer[i-2][j] + answer[i-2][j-1];             }             answer.push_back(sub);         }         return answer;     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/118-Pascal's-Triangle/",
        "teaser": null
      },{
        "title": "Distance Between Bus Stops",
        "excerpt":"&lt;-E 1184&gt; Distance Between Bus Stops class Solution { public: int distanceBetweenBusStops(vector&lt;int&gt;&amp; distance, int start, int destination) { int sum = accumulate(distance.begin(), distance.end(), 0); int sum1 = 0; int check = max(start, destination); for(int i = min(start, destination);i &lt; check; i++) sum1 += distance[i]; return min(sum - sum1, sum1); }...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1184-Distance-Between-Bus-Stops/",
        "teaser": null
      },{
        "title": "Count Odd Numbers in an Interval Range",
        "excerpt":"&lt;-E 1523&gt; Count Odd Numbers in an Interval Range   class Solution { public:     int countOdds(int low,int high) {         return (high - low + high % 2 + low % 2) / 2;     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1523-Count-Odd-Numbers-in-an-Interval-Range/",
        "teaser": null
      },{
        "title": "Make The String Great",
        "excerpt":"&lt;-E 1544&gt; Make The String Great   class Solution { public:     string makeGood(string s) {         if (s.size() == 0)              return s;         string stack = \"\";         for (auto p: s) {             if (abs(p - stack.back()) == 32) {                 stack.pop_back();             }             else {                 stack += p;             }         }         return stack;     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1544-Make-The-String-Great/",
        "teaser": null
      },{
        "title": "Reformat Phone Number",
        "excerpt":"&lt;-E 1694&gt; Reformat Phone Number class Solution { public: string reformatNumber(string number) { string tmp, res; for (char c : number) { if (isdigit(c)) tmp.push_back(c); } for (int i = 0; i &lt; tmp.size();) { if (tmp.size() - i &gt; 4) { res += tmp.substr(i, 3); res.push_back('-'); i += 3;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1694-Reformat-Phone-Number/",
        "teaser": null
      },{
        "title": "Minimum Absolute Difference in BST",
        "excerpt":"&lt;-E 530&gt; Minimum Absolute Difference in BST /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode *left, TreeNode *right)...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/530-Minimum-Absolute-Difference-in-BST/",
        "teaser": null
      },{
        "title": "Construct String from Binary Tree",
        "excerpt":"&lt;-E 606&gt; Construct String from Binary Tree /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode *left, TreeNode *right)...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/606-Construct-String-from-Binary-Tree/",
        "teaser": null
      },{
        "title": "Minimum Distance Between BST Nodes",
        "excerpt":"&lt;-E 783&gt; Minimum Distance Between BST Nodes /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode *left, TreeNode *right)...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/783-Minimum-Distance-Between-BST-Nodes/",
        "teaser": null
      },{
        "title": "Reorder Data in Log Files",
        "excerpt":"&lt;-E 937&gt; Reorder Data in Log Files class Solution { public: struct comp{ bool operator() (pair&lt;string,string&gt; &amp; a, pair&lt;string,string&gt; &amp; b) { return a.second == b.second ? a.first &lt; b.first: a.second &lt; b.second; } }; vector&lt;string&gt; reorderLogFiles(vector&lt;string&gt;&amp; logs) { vector&lt;pair&lt;string,string&gt;&gt; letter; vector&lt;string&gt; digit; for(string s: logs) { int ind =...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/937-Reorder-Data-in-Log-Files/",
        "teaser": null
      },{
        "title": "Pascal's Triangle II",
        "excerpt":"&lt;-E 119&gt; Pascal’s Triangle II class Solution { public: vector &lt;int&gt; getRow(int rowIndex) { int rowNumber = rowIndex + 1; vector result(rowNumber, 1); for (int i = 2; i &lt; rowNumber; i++) { int prev = 1; for (int j = 1; j &lt; i; j++) { int temp =...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/119-Pascal's-Triangle-II/",
        "teaser": null
      },{
        "title": "Number of Students Unable to Eat Lunch",
        "excerpt":"&lt;-E 1700&gt; Number of Students Unable to Eat Lunch // Method 1 class Solution { public: int countStudents(vector&lt;int&gt;&amp; A, vector&lt;int&gt;&amp; B) { int count[] = {0, 0}, n = A.size(), k; for (int a : A) count[a]++; for (k = 0; k &lt; n &amp;&amp; count[B[k]] &gt; 0; ++k) count[B[k]]--;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1700-Number-of-Students-Unable-to-Eat-Lunch/",
        "teaser": null
      },{
        "title": "Is Subsequence",
        "excerpt":"&lt;-E 392&gt; Is Subsequence   class Solution { public:     bool isSubsequence(string s, string t) {         if(s == t)             return true;         int c = 0;         for(int i = 0; i &lt; t.size(); i++)              if(s[c] == t[i])                 c++;         if(c == s.size())             return true;         else                     return false;          } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/392-Is-Subsequence/",
        "teaser": null
      },{
        "title": "Longest Harmonious Subsequence",
        "excerpt":"&lt;-E 594&gt; Longest Harmonious Subsequence // Method 1 class Solution { public: int findLHS(vector&lt;int&gt;&amp; nums) { unordered_map&lt;int,int&gt; m; int ans = 0; for(auto x : nums){ m[x]++; if(m.count(x+1)) ans = max(ans, m[x] + m[x+1]); if(m.count(x-1)) ans = max(ans, m[x] + m[x-1]); } return ans; } }; // Method 2 class...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/594-Longest-Harmonious-Subsequence/",
        "teaser": null
      },{
        "title": "Image Smoother",
        "excerpt":"&lt;-E 661&gt; Image Smoother class Solution { public: vector&lt;vector&lt;int&gt;&gt; imageSmoother(vector&lt;vector&lt;int&gt;&gt;&amp; M) { vector&lt;int&gt; d{-1, 0, 1}; vector&lt;vector&lt;int&gt;&gt; res(M.size(), vector&lt;int&gt;(M[0].size(), 0)); for(int i = 0; i &lt; M.size(); ++i) { for(int j = 0; j &lt; M[0].size(); ++j) { int sum = 0, count = 0; for(int k = 0; k...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/661-Image-Smoother/",
        "teaser": null
      },{
        "title": "1-bit and 2-bit Characters",
        "excerpt":"&lt;-E 717&gt; 1-bit and 2-bit Characters   class Solution { public:     bool isOneBitCharacter(vector&lt;int&gt;&amp; bits) {         int i = 0;         while (i &lt; bits.size() - 1) {             i += bits[i] + 1;         }         return i == bits.size() - 1;     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/717-1-bit-and-2-bit-Characters/",
        "teaser": null
      },{
        "title": "Cousins in Binary Tree",
        "excerpt":"&lt;-E 993&gt; Cousins in Binary Tree /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode *left, TreeNode *right) :...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/993-Cousins-in-Binary-Tree/",
        "teaser": null
      },{
        "title": "Partition Array Into Three Parts With Equal Sum",
        "excerpt":"&lt;-E 1013&gt; Partition Array Into Three Parts With Equal Sum class Solution { public: bool canThreePartsEqualSum(vector&lt;int&gt;&amp; A) { int target = accumulate(A.begin(), A.end(), 0); if(target % 3 != 0) return false; int cur = 0, count = 0; target /= 3; for(int n : A) { cur += n; if(cur...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1013.-Partition-Array-Into-Three-Parts-With-Equal-Sum/",
        "teaser": null
      },{
        "title": "Greatest Common Divisor of Strings",
        "excerpt":"&lt;-E 1071&gt; Greatest Common Divisor of Strings // Method 1 class Solution { public: string gcdOfStrings(string s1, string s2) { return s1+s2==s2+s1 ? s1.substr(0, gcd(size(s1), size(s2))) : \"\"; } }; // Method 2 class Solution { public: string gcdOfStrings(string s1, string s2) { if(size(s1)&lt;size(s2)) swap(s1, s2); return s1==s2 ? s1...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1071-Greatest-Common-Divisor-of-Strings/",
        "teaser": null
      },{
        "title": "Prime Arrangements",
        "excerpt":"&lt;-E 1175&gt; Prime Arrangements class Solution { public: int numPrimeArrangements(int n) { int m = 1e9 + 7, pr = 0, npr = 1; long res = 1; for (int i = 2; i &lt;= n; ++i) { bool fg = true; for (int j = 2; j * j...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1175-Prime-Arrangements/",
        "teaser": null
      },{
        "title": "Implement Queue using Stacks",
        "excerpt":"&lt;-E 232&gt; Implement Queue using Stacks class MyQueue { void populate_s2(){ while(!s1.empty()){ s2.push(s1.top()); s1.pop(); } } public: stack&lt;int&gt; s1; stack&lt;int&gt; s2; void push(int x) { s1.push(x); } int pop() { if(s2.empty()) populate_s2(); int x = s2.top(); s2.pop(); return x; } int peek() { if(s2.empty()) populate_s2(); return s2.top(); } bool empty()...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/232-Implement-Queue-using-Stacks/",
        "teaser": null
      },{
        "title": "Lowest Common Ancestor of a Binary Search Tree",
        "excerpt":"&lt;-E 235&gt; Lowest Common Ancestor of a Binary Search Tree // Method 1 /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode(int x) : val(x), left(NULL), right(NULL) {} * }; */ class Solution { public: TreeNode*...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/235-Lowest-Common-Ancestor-of-a-Binary-Search-Tree/",
        "teaser": null
      },{
        "title": "Diameter of Binary Tree",
        "excerpt":"&lt;-E 543&gt; Diameter of Binary Tree /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode *left, TreeNode *right) :...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/543-Diameter-of-Binary-Tree/",
        "teaser": null
      },{
        "title": "Range Addition II",
        "excerpt":"&lt;-E 598&gt; Range Addition II class Solution { public: int maxCount(int m, int n, vector&lt;vector&lt;int&gt;&gt;&amp; ops) { if(ops.size() == 0) return m * n; int x = INT_MAX, y = INT_MAX; for(int i = 0; i &lt; ops.size(); i++){ x = min(x, ops[i][0]); y = min(y, ops[i][1]); } return x*y;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/598-Range-Addition-II/",
        "teaser": null
      },{
        "title": "Kth Largest Element in a Stream",
        "excerpt":"&lt;-E 703&gt; Kth Largest Element in a Stream class KthLargest { public: int k; priority_queue&lt;int, vector&lt;int&gt;,greater&lt;int&gt;&gt; minHeap; KthLargest(int k, vector&lt;int&gt;&amp; nums) { this-&gt;k = k; for(int i: nums) { minHeap.push(i); if(minHeap.size() &gt; k) minHeap.pop(); } } int add(int val) { if(minHeap.size() &lt; k || val &gt; minHeap.top()) minHeap.push(val); if(minHeap.size() &gt;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/703-Kth-Largest-Element-in-a-Stream/",
        "teaser": null
      },{
        "title": "Longest Word in Dictionary",
        "excerpt":"&lt;-E 720&gt; Longest Word in Dictionary class Solution { private: struct TrieNode { TrieNode *children[26]; bool isEndOfWord = false; }; public: static bool compare(string &amp;a, string &amp;b){ return a.size() &lt; b.size(); } void TrieInsert(TrieNode *root, int idx, string &amp;word, bool canBeBuilt, string &amp;res){ if(idx == word.size()){ root-&gt;isEndOfWord = true; if(canBeBuilt){...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/720-Longest-Word-in-Dictionary/",
        "teaser": null
      },{
        "title": "Min Cost Climbing Stairs",
        "excerpt":"&lt;-E 746&gt; Min Cost Climbing Stairs // Method 1 class Solution { public: int minCostClimbingStairs(vector&lt;int&gt;&amp; cost) { vector&lt;int&gt; memo(cost.size()); for (int i = 0; i &lt; cost.size(); ++i) { if (i == 0 || i == 1) memo[i] = cost[i]; else memo[i] = min(memo[i - 1], memo[i - 2]) +...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/746-Min-Cost-Climbing-Stairs/",
        "teaser": null
      },{
        "title": "Positions of Large Groups",
        "excerpt":"&lt;-E 830&gt; Positions of Large Groups class Solution { public: vector&lt;vector&lt;int&gt;&gt; largeGroupPositions(string s) { vector&lt;vector&lt;int&gt;&gt; res; int start = 0; for (int i = 0; i &lt;= s.size(); i++) { if (s[start] != s[i]){ if (i - start &gt;= 3) res.push_back({start , (i - 1) }); start = i; }...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/830-Positions-of-Large-Groups/",
        "teaser": null
      },{
        "title": "Lemonade Change",
        "excerpt":"&lt;-E 860&gt; Lemonade Change class Solution { public: bool lemonadeChange(vector&lt;int&gt;&amp; bills) { int five = 0, ten = 0; for (int &amp;i : bills) { if (i == 5) five++; else if (i == 10) five--, ten++; else if (ten &gt; 0) ten--, five--; else five -= 3; if (five...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/860-Lemonade-Change/",
        "teaser": null
      },{
        "title": "Find the Town Judge",
        "excerpt":"&lt;-E 997&gt; Find the Town Judge class Solution { public: int findJudge(int N, vector&lt;vector&lt;int&gt;&gt;&amp; trust) { if (N == 1) return 1; vector&lt;int&gt; visitCount(N + 1,0); for (int i = 0; i&lt; trust.size(); i++){ visitCount[trust[i][1]]++; visitCount[trust[i][0]]--; } for (int i = 0; i &lt; visitCount.size(); i++){ if ((N - 1)...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/997-Find-the-Town-Judge/",
        "teaser": null
      },{
        "title": "Path Sum",
        "excerpt":"&lt;-E 112&gt; Path Sum /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left),...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/112-Path-Sum/",
        "teaser": null
      },{
        "title": "Number of Equivalent Domino Pairs",
        "excerpt":"&lt;-E 1128&gt; Number of Equivalent Domino Pairs // Method 1 class Solution { public: int numEquivDominoPairs(vector&lt;vector&lt;int&gt;&gt;&amp; dominoes) { for (auto &amp;p: dominoes) { if (p[0]&lt;=p[1]) {continue;} swap(p[0], p[1]); } map&lt;vector&lt;int&gt;, int&gt; A; for (auto &amp;p: dominoes) {++A[p];} int res=0; for (auto &amp;p: A) { res += p.second*(p.second -1)/2; } return...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1128-Number-of-Equivalent-Domino-Pairs/",
        "teaser": null
      },{
        "title": "Power of Three",
        "excerpt":"&lt;-E 326&gt; Power of Three // Method 1 class Solution { public: bool isPowerOfThree(int n) { if (n==0) return false; while (n % 3 == 0) { n = n / 3; } return n == 1; } }; // Method 2 class Solution { public: bool isPowerOfThree(int n) {...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1326-Power-of-Three/",
        "teaser": null
      },{
        "title": "Get Maximum in Generated Array",
        "excerpt":"&lt;-E 1646&gt; Get Maximum in Generated Array class Solution { public: int getMaximumGenerated(int n) { if (n &lt;= 1) return n; int maxGen = 0; vector&lt;int&gt; vGen(n + 1, 0); vGen[1] = 1; for (int i = 2; i &lt;= n; i++) { if (i % 2 == 0) vGen[i]...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1646-Get-Maximum-in-Generated-Array/",
        "teaser": null
      },{
        "title": "Implement Stack using Queues",
        "excerpt":"&lt;-E 225&gt; Implement Stack using Queues class MyStack { public: queue&lt;int&gt; q1; /** Initialize your data structure here. */ MyStack() { } /** Push element x onto stack. */ void push(int x) { queue&lt;int&gt; q2; int n = q1.size(); for (int i=0; i&lt;n; ++i) { q2.push(q1.front()); q1.pop(); } q1.push(x); for...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/225-Implement-Stack-using-Queues/",
        "teaser": null
      },{
        "title": "Range Sum Query - Immutable",
        "excerpt":"&lt;-E 303&gt; Range Sum Query - Immutable /** * Your NumArray object will be instantiated and called as such: * NumArray* obj = new NumArray(nums); * int param_1 = obj-&gt;sumRange(i,j); */ class NumArray { private: vector&lt;int&gt; num; public: NumArray(vector&lt;int&gt;&amp; nums) { num=nums; for(int i=1;i&lt;nums.size();i++) num[i]+=num[i-1]; } int sumRange(int i, int...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/303-Range-Sum-Query-Immutable/",
        "teaser": null
      },{
        "title": "Binary Watch",
        "excerpt":"&lt;-E 401&gt; Binary Watch class Solution { public: int numbits(int x) { int cnt = 0; while(x) { x &amp;= x - 1; cnt++; } return cnt; } vector&lt;string&gt; readBinaryWatch(int num) { vector&lt;string&gt; res; const int upper_limit = (1&lt;&lt;10); for(int i = 0;i&lt; upper_limit;i++) { if(numbits(i) != num) continue; int...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/401-Binary-Watch/",
        "teaser": null
      },{
        "title": "Subtree of Another Tree",
        "excerpt":"&lt;-E 572&gt; Subtree of Another Tree /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode *left, TreeNode *right) :...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/572-Subtree-of-Another-Tree/",
        "teaser": null
      },{
        "title": "Maximum Product of Three Numbers",
        "excerpt":"&lt;-E 628&gt; Maximum Product of Three Numbers // Method 1 class Solution { public: int maximumProduct(vector&lt;int&gt;&amp; nums) { sort(nums.begin(),nums.end()); return max((nums[0] * nums[1] * nums.back()), (nums.back() * nums[nums.size() - 2] * nums[nums.size() - 3])); } }; // Method 2 class Solution { public: int maximumProduct(vector&lt;int&gt;&amp; nums) { int mx1 =...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/628-Maximum-Product-of-Three-Numbers/",
        "teaser": null
      },{
        "title": "Longest Continuous Increasing Subsequence",
        "excerpt":"&lt;-E 674&gt; Longest Continuous Increasing Subsequence class Solution { public: int findLengthOfLCIS(vector&lt;int&gt;&amp; nums) { int n = nums.size(), result = 1, current = 1; if(n == 0) return 0; for(int i = 1; i &lt; n; i++){ if(nums[i] &gt; nums[i-1]) current++; else current = 1; result = max(result, current); }...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/674-Longest-Continuous-Increasing-Subsequence/",
        "teaser": null
      },{
        "title": "Find Pivot Index",
        "excerpt":"&lt;-E 724&gt; Find Pivot Index class Solution { public: int pivotIndex(vector&lt;int&gt;&amp; nums) { int sum = 0, cur = 0; sum = accumulate(nums.begin(), nums.end(), 0); for(int i = 0; i &lt; nums.size(); i++) if(cur * 2 == sum - nums[i]) return i; else cur += nums[i]; return -1; } };...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/724-Find-Pivot-Index/",
        "teaser": null
      },{
        "title": "Find Smallest Letter Greater Than Target",
        "excerpt":"&lt;-E 744&gt; Find Smallest Letter Greater Than Target class Solution { public: char nextGreatestLetter(vector&lt;char&gt;&amp; letters, char target) { char ans = 'z' + 1; for(auto i : letters) { if(i &gt; target) { if(ans &gt; i) { ans = i; } } } return (ans == 'z' + 1) ?...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/744-Find-Smallest-Letter-Greater-Than-Target/",
        "teaser": null
      },{
        "title": "Most Common Word",
        "excerpt":"&lt;-E 819&gt; Most Common Word // Method 1 class Solution { public: string mostCommonWord(string paragraph, vector&lt;string&gt;&amp; banned) { transform(paragraph.begin(), paragraph.end(), paragraph.begin(), ::tolower); map&lt;string,int&gt;mp; string s = \"\"; for(char c : paragraph) { if(isalpha(c)) s += c; else { if(s.size() &gt; 0) mp[s]++; s = \"\"; } } if(s.size() &gt; 0)...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/819-Most-Common-Word/",
        "teaser": null
      },{
        "title": "Rectangle Overlap",
        "excerpt":"&lt;-E 836&gt; Rectangle Overlap   class Solution { public:     bool isRectangleOverlap(vector&lt;int&gt;&amp; rec1, vector&lt;int&gt;&amp; rec2) {         int max_start = max(rec1[0], rec2[0]);         int min_end = min(rec1[2], rec2[2]);         if (min_end - max_start &lt;= 0)              return false; \t         int min_start = min(rec1[3], rec2[3]);         int max_end = max(rec1[1],rec2[1]);         return min_start - max_end &gt;0;     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/836-Rectangle-Overlap/",
        "teaser": null
      },{
        "title": "Backspace String Compare",
        "excerpt":"&lt;-E 844&gt; Backspace String Compare class Solution { public: bool backspaceCompare(string S, string T) { stack&lt;char&gt; A, B; for (auto &amp;p: S) { if (p=='#') { if (!A.empty()) {A.pop();} continue; } A.push(p); } for (auto &amp;p: T) { if (p=='#') { if (!B.empty()) {B.pop();} continue; } B.push(p); } if (A.size()...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/844-Backspace-String-Compare/",
        "teaser": null
      },{
        "title": "Add to Array-Form of Integer",
        "excerpt":"&lt;-E 989&gt; Add to Array-Form of Integer // Method 1 class Solution { public: vector&lt;int&gt; addToArrayForm(vector&lt;int&gt;&amp; A, int K) { int pos = A.size()-1; int carry = 0; std::vector&lt;int&gt; ret; while(K &gt; 0 || pos &gt;= 0 || carry &gt; 0){ int kdigit = K % 10; K = K...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/989-Add-to-Array-Form-of-Integer/",
        "teaser": null
      },{
        "title": "Rearrange Spaces Between Words",
        "excerpt":"&lt;-E 1592&gt; Rearrange Spaces Between Words class Solution { public: string reorderSpaces(string text) { auto words{0}, words_lengths{0}; string w; for(stringstream ss{text}; ss&gt;&gt;w; words_lengths += size(w), words++); int spaces = size(text) - words_lengths, d = words != 1 ? spaces / (words - 1) : 0; string out; for(stringstream ss{text}; ss&gt;&gt;w;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1592-Rearrange-Spaces-Between-Words/",
        "teaser": null
      },{
        "title": "Repeated Substring Pattern",
        "excerpt":"&lt;-E 459&gt; Repeated Substring Pattern // Method 1 class Solution { public: bool repeatedSubstringPattern(string s) { return (s + s).substr(1, 2 * s.size() - 2).find(s) != string::npos; } }; // Method 2 class Solution { public: bool repeatedSubstringPattern(string s) { string temp; for(int i = 0; i &lt; s.size() /...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/459-Repeated-Substring-Pattern/",
        "teaser": null
      },{
        "title": "License Key Formatting",
        "excerpt":"&lt;-E 482&gt; License Key Formatting class Solution { public: string licenseKeyFormatting(string S, int K) { int len = S.length(); string result = \"\"; int counter = 0; for(int idx = len - 1; idx &gt;= 0; idx--){ char c = S[idx]; if(c == '-') continue; if(counter == K){ result +=...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/482-License-Key-Formatting/",
        "teaser": null
      },{
        "title": "Moving Stones Until Consecutive",
        "excerpt":"&lt;-E 1033&gt; Moving Stones Until Consecutive class Solution { public: vector&lt;int&gt; numMovesStones(int a, int b, int c) { int sum_ = a + b + c; int min_ = min(a, min(b, c)); int max_ = max(a, max(b, c)); int mid_ = sum_ - min_ - max_; if (max_ - min_...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1033-Moving-Stones-Until-Consecutive/",
        "teaser": null
      },{
        "title": "Find Mode in Binary Search Tree",
        "excerpt":"&lt;-E 501&gt; Find Mode in Binary Search Tree /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode *left, TreeNode...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/501-Find-Mode-in-Binary-Search-Tree/",
        "teaser": null
      },{
        "title": "Largest Number At Least Twice of Others",
        "excerpt":"&lt;-E 747&gt; Largest Number At Least Twice of Others // Method 1 class Solution { public: int dominantIndex(vector&lt;int&gt;&amp; nums) { int mx = *max_element(nums.begin(), nums.end()); int index = -1; for(int i = 0; i &lt; nums.size(); i++) { if(nums[i] == mx) { index = i; continue; } if(nums[i] * 2...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/747-Largest-Number-At-Least-Twice-of-Others/",
        "teaser": null
      },{
        "title": "Intersection of Two Linked Lists",
        "excerpt":"&lt;-E 160&gt; Intersection of Two Linked Lists /** * Definition for singly-linked list. * struct ListNode { * int val; * ListNode *next; * ListNode(int x) : val(x), next(NULL) {} * }; */ // Method 1 class Solution { public: ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) { unordered_set&lt;ListNode*&gt; s; while (headA)...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/160-Intersection-of-Two-Linked-Lists/",
        "teaser": null
      },{
        "title": "Set Mismatch",
        "excerpt":"&lt;-E 645&gt; Set Mismatch class Solution { public: vector&lt;int&gt; findErrorNums(vector&lt;int&gt;&amp; nums) { vector&lt;int&gt; v(nums.size() + 1), res(2); for(int i = 0; i &lt; nums.size(); ++i) if(++v[nums[i]] == 2) res[0] = nums[i]; for(int i = 1; i &lt; v.size(); ++i) if(!v[i]) { res[1] = i; break; } return res; } };...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/645-Set-Mismatch/",
        "teaser": null
      },{
        "title": "Second Minimum Node In a Binary Tree",
        "excerpt":"&lt;-E 671&gt; Second Minimum Node In a Binary Tree /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode *left,...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/671-Second-Minimum-Node-In-a-Binary-Tree/",
        "teaser": null
      },{
        "title": "Valid Boomerang",
        "excerpt":"&lt;-E 1037&gt; Valid Boomerang   class Solution { public:     bool isBoomerang(vector&lt;vector&lt;int&gt;&gt;&amp; points) {         return (points[1][1] - points[0][1]) * (points[2][0] - points[1][0]) !=              (points[2][1] - points[1][1]) * (points[1][0] - points[0][0]);     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1037-Valid-Boomerang/",
        "teaser": null
      },{
        "title": "Minimum Depth of Binary Tree",
        "excerpt":"&lt;-E 111&gt; Minimum Depth of Binary Tree /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode *left, TreeNode *right)...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/111-Minimum-Depth-of-Binary-Tree/",
        "teaser": null
      },{
        "title": "Remove Linked List Elements",
        "excerpt":"&lt;-E 203&gt; Remove Linked List Elements /** * Definition for singly-linked list. * struct ListNode { * int val; * ListNode *next; * ListNode() : val(0), next(nullptr) {} * ListNode(int x) : val(x), next(nullptr) {} * ListNode(int x, ListNode *next) : val(x), next(next) {} * }; */ // Method 1...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1203-Remove-Linked-List-Elements/",
        "teaser": null
      },{
        "title": "Count Primes",
        "excerpt":"&lt;-E 204&gt; Count Primes class Solution { public: int countPrimes(int n) { if (n==0 || n==1) return false; // vector&lt;int&gt; prime(n+1, 1); // ---- int prime[n]; for (int i = 0; i &lt; n; i++) { prime[i] = 1; } // ----- for (int p = 2; p * p...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1204-Count-Primes/",
        "teaser": null
      },{
        "title": "Valid Palindrome",
        "excerpt":"&lt;-E 125&gt; Valid Palindrome class Solution { public: bool isPalindrome(string s) { if(s.length() &lt;= 1) return true; int l = 0, r = s.length() - 1; while(l &lt; r) { if(!isalnum(s[r])) r--; else if(!isalnum(s[l])) l++; else { if(tolower(s[l]) != tolower(s[r])) return false; l++; r--; } } return true; } };...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/125-Valid-Palindrome/",
        "teaser": null
      },{
        "title": "Linked List Cycle",
        "excerpt":"&lt;-E 141&gt; Linked List Cycle /** * Definition for singly-linked list. * struct ListNode { * int val; * ListNode *next; * ListNode(int x) : val(x), next(NULL) {} * }; */ class Solution { public: bool hasCycle(ListNode *head) { ListNode* slow = head; ListNode* fast = head; while(fast != NULL...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/141-Linked-List-Cycle/",
        "teaser": null
      },{
        "title": "Detect Pattern of Length M Repeated K or More Times",
        "excerpt":"&lt;-E 1566&gt; Detect Pattern of Length M Repeated K or More Times class Solution { public: bool containsPattern(vector&lt;int&gt;&amp; arr, int m, int k) { int n = arr.size(); int counter = 0; for (int i = 0; i + m &lt; n; i++) { if (arr[i] == arr[i+m]) counter++; else...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1566-Detect-Pattern-of-Length-M-Repeated-K-or-More-Times/",
        "teaser": null
      },{
        "title": "Maximum Repeating Substring",
        "excerpt":"&lt;-E 1668&gt; Maximum Repeating Substring   class Solution { public:     int maxRepeating(string sequence, string word) {         string temp = word;         int times = 0;         while (sequence.find(temp) != string::npos) {             temp += word;             times++;         }         return times;     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1668-Maximum-Repeating-Substring/",
        "teaser": null
      },{
        "title": "Valid Palindrome II",
        "excerpt":"&lt;-E 680&gt; Valid Palindrome II class Solution { public: bool validPalindrome(string s) { int i = 0; int j = s.length() - 1; while (i &lt; j) { if (s[i] == s[j]) { i++; j--; continue; } return isPal(s, i + 1, j) || isPal(s, i, j - 1); }...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1680-Valid-Palindrome-II/",
        "teaser": null
      },{
        "title": "Determine if String Halves Are Alike",
        "excerpt":"&lt;-E 1704&gt; Determine if String Halves Are Alike class Solution { public: bool halvesAreAlike(string s) { int n = s.size(); string s1 = s.substr(0,n/2); string s2 = s.substr(n/2,n/2); unordered_set&lt;char&gt; vs = {'a','e','i','o','u','A','E','I','O','U'}; int c = 0; for(auto a : s1){ if(vs.find(a) != vs.end()) c++; } for(auto a:s2){ if(vs.find(a) != vs.end())...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1704-Determine-if-String-Halves-Are-Alike/",
        "teaser": null
      },{
        "title": "Reverse Bits",
        "excerpt":"&lt;-E 190&gt; Reverse Bits   class Solution { public:     uint32_t reverseBits(uint32_t n) {         uint32_t ret = 0;         for(int i = 31; i &gt;= 0; i--) {             ret |= ((1 &amp; n) &lt;&lt; i);             n = n &gt;&gt; 1;         }         return ret;     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/190-Reverse-Bits/",
        "teaser": null
      },{
        "title": "Isomorphic Strings",
        "excerpt":"&lt;-E 205&gt; Isomorphic Strings   class Solution { public:     bool isIsomorphic(string s, string t) {         vector&lt;int&gt; v1(256),v2(256);         for(int i = 0; i &lt; s.size(); i++){             if(v1[s[i]] != v2[t[i]])                  return false;             v1[s[i]] = i + 1;             v2[t[i]] = i + 1;         }         return true;     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/205-Isomorphic-Strings/",
        "teaser": null
      },{
        "title": "Summary Ranges",
        "excerpt":"&lt;-E 228&gt; Summary Ranges class Solution { public: vector&lt;string&gt; summaryRanges(vector&lt;int&gt;&amp; nums) { vector&lt;string&gt; ranges; int n = nums.size(); if(n == 0) return ranges; int l = nums[0]; for(int i = 1; i &lt;= n; ++i) { if(i == n || nums[i] &gt; nums[i-1] + 1) { if(nums[i-1] == l) ranges.push_back(to_string(l));...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/228-Summary-Ranges/",
        "teaser": null
      },{
        "title": "Palindrome Linked List",
        "excerpt":"&lt;-E 234&gt; Palindrome Linked List /** * Definition for singly-linked list. * struct ListNode { * int val; * ListNode *next; * ListNode() : val(0), next(nullptr) {} * ListNode(int x) : val(x), next(nullptr) {} * ListNode(int x, ListNode *next) : val(x), next(next) {} * }; */ class Solution { public:...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/234-Palindrome-Linked-List/",
        "teaser": null
      },{
        "title": "First Bad Version",
        "excerpt":"&lt;-E 278&gt; First Bad Version // The API isBadVersion is defined for you. // bool isBadVersion(int version); class Solution { public: int firstBadVersion(int n) { int start = 1; int end = n; int ans = 0; while(start &lt;= end) { int mid = start + (end - start) /...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/278-First-Bad-Version/",
        "teaser": null
      },{
        "title": "Word Pattern",
        "excerpt":"&lt;-E 290&gt; Word Pattern class Solution { public: bool wordPattern(string pattern, string s) { stringstream ss(s); unordered_map&lt;string,char&gt; mp1; unordered_map&lt;char,string&gt; mp2; string str; int i = 0; while(ss &gt;&gt; str){ if(mp1[str] &lt; 1 and mp2[pattern[i]].size() &lt; 1){ mp1[str] = pattern[i]; mp2[pattern[i]] = str; } else if(mp1[str] != pattern[i] or mp2[pattern[i]] !=...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/290-Word-Pattern/",
        "teaser": null
      },{
        "title": "Third Maximum Number",
        "excerpt":"&lt;-E 414&gt; Third Maximum Number class Solution { public: int thirdMax(vector&lt;int&gt;&amp; nums) { if (nums.size() == 1) return nums[0]; if (nums.size() == 2) return nums[0] &gt; nums[1] ? nums[0] : nums[1]; int max1 = nums[0]; int max2 = numeric_limits&lt;int&gt;::min(); int max3 = numeric_limits&lt;int&gt;::min(); bool has_int_min = false; for (int i...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/414-Third-Maximum-Number/",
        "teaser": null
      },{
        "title": "Can Place Flowers",
        "excerpt":"&lt;-E 605&gt; Can Place Flowers class Solution { public: bool canPlaceFlowers(vector&lt;int&gt;&amp; flowerbed, int n) { for (int i = 0; i &lt; flowerbed.size(); i++) { if (n == 0) return true; if (flowerbed[i] == 0) { if (i &gt; 0 &amp;&amp; flowerbed[i - 1] == 1) continue; if (i &lt;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/605-Can-Place-Flowers/",
        "teaser": null
      },{
        "title": "Maximum Average Subarray I",
        "excerpt":"&lt;-E 643&gt; Maximum Average Subarray I class Solution { public: double findMaxAverage(vector&lt;int&gt;&amp; nums, int k) { int cumulative[nums.size()]; cumulative[0] = nums[0]; for(int i = 1; i &lt; nums.size(); i++) cumulative[i] = nums[i] + cumulative[i - 1]; double max = cumulative[k - 1]; for(int i = 1; i &lt;= nums.size() -...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/643-Maximum-Average-Subarray-I/",
        "teaser": null
      },{
        "title": "Buddy Strings",
        "excerpt":"&lt;-E 859&gt; Buddy Strings class Solution { public: bool buddyStrings(string A, string B) { if(A.size()!= B.size()) return false; if(A == B){ vector&lt;int&gt;freq(26,0); for(int i = 0; i &lt; A.size(); i++){ if(++freq[A[i] - 'a'] == 2) return true; } return false; } vector&lt;int&gt; mismatch; for(int i = 0; i &lt; A.size();i++){...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/859-Buddy-Strings/",
        "teaser": null
      },{
        "title": "Walking Robot Simulation",
        "excerpt":"&lt;-E 874&gt; Walking Robot Simulation class Solution { public: int robotSim(vector&lt;int&gt;&amp; commands, vector&lt;vector&lt;int&gt;&gt;&amp; obstacles) { int x = 0, y = 0; char dir = 'u'; set&lt;pair&lt;int, int&gt;&gt;s; for (int i = 0; i &lt; obstacles.size(); i++) s.insert({obstacles[i][0], obstacles[i][1]}); int res = 0; for (int i = 0; i &lt;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/874-Walking-Robot-Simulation/",
        "teaser": null
      },{
        "title": "X of a Kind in a Deck of Cards",
        "excerpt":"&lt;-E 914&gt; X of a Kind in a Deck of Cards   class Solution { public:     bool hasGroupsSizeX(vector&lt;int&gt;&amp; deck) {         unordered_map&lt;int, int&gt; mp;         for(auto d : deck)             mp[d]++;         int x;         x = mp.begin()-&gt;second;         for(auto it : mp)             x = gcd(x, it.second);         if(x &gt; 1)              return true;         return false;     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/914-X-of-a-Kind-in-a-Deck-of-Cards/",
        "teaser": null
      },{
        "title": "Long Pressed Name",
        "excerpt":"&lt;-E 925&gt; Long Pressed Name class Solution { public: bool isLongPressedName(string name, string typed) { int i = 0; int j = 0; char temp; while(i &lt;= name.size() || j &lt;= typed.size()) { if(name[i] == typed[j]) { temp = name[i]; i++; j++; } else { if(temp == typed[j]) j++; else...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/925-Long-Pressed-Name/",
        "teaser": null
      },{
        "title": "Valid Mountain Array",
        "excerpt":"&lt;-E 941&gt; Valid Mountain Array class Solution { public: bool validMountainArray(vector&lt;int&gt;&amp; arr) { if (arr.size() &lt;= 1) return false; int i = 0; while (i &lt; arr.size() - 1 &amp;&amp; arr[i] &lt; arr[i + 1]) i++; if (i == 0 || i == arr.size()-1) return false; while (i &lt; arr.size()...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/941-Valid-Mountain-Array/",
        "teaser": null
      },{
        "title": "Powerful Integers",
        "excerpt":"&lt;-E 970&gt; Powerful Integers class Solution { public: vector&lt;int&gt; powerfulIntegers(int x, int y, int bound) { set&lt;int&gt; res; deque&lt;pair&lt;int, int&gt;&gt; powers = { {0,0} }; while (!powers.empty()) { auto [i, j] = powers.front(); int v = pow(x, i) + pow(y, j); if (v &lt;= bound) { if (x &gt; 1)...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/970-Powerful-Integers/",
        "teaser": null
      },{
        "title": "CS50 Notes - Search",
        "excerpt":"00 Search Finding a solution to a problem, like a navigator app that finds the best route from your origin to the destination, or like playing a game and figuring out the next move. Basic terminology initial state the state in which the agent begins agent entity that perceives its...","categories": ["Notes"],
        "tags": ["AI"],
        "url": "/notes/CS50_00_AI_NOTES/",
        "teaser": null
      },{
        "title": "CS50 Notes - Knowledge",
        "excerpt":"01 Knowledge Representing information and drawing inferences from it. Basic terminology knowledge-based agents agents that reason by operating on internal representations of knowledge sentence an assertion about the world in a knowledge representation language model assignment of a truth value to every propositional symbol (a “possible world”) knowledge base a...","categories": ["Notes"],
        "tags": ["AI"],
        "url": "/notes/CS50_01_AI_NOTES/",
        "teaser": null
      },{
        "title": "CS50 Notes",
        "excerpt":"01 Knowledge Representing information and drawing inferences from it. Basic terminology knowledge-based agents agents that reason by operating on internal representations of knowledge sentence an assertion about the world in a knowledge representation language model assignment of a truth value to every propositional symbol (a “possible world”) knowledge base a...","categories": ["Notes"],
        "tags": ["AI"],
        "url": "/notes/CS50_02_AI_NOTES/",
        "teaser": null
      },{
        "title": "CS50 Notes",
        "excerpt":"01 Knowledge Representing information and drawing inferences from it. Basic terminology knowledge-based agents agents that reason by operating on internal representations of knowledge sentence an assertion about the world in a knowledge representation language model assignment of a truth value to every propositional symbol (a “possible world”) knowledge base a...","categories": ["Notes"],
        "tags": ["AI"],
        "url": "/notes/CS50_03_AI_NOTES/",
        "teaser": null
      },{
        "title": "CS50 Notes",
        "excerpt":"01 Knowledge Representing information and drawing inferences from it. Basic terminology knowledge-based agents agents that reason by operating on internal representations of knowledge sentence an assertion about the world in a knowledge representation language model assignment of a truth value to every propositional symbol (a “possible world”) knowledge base a...","categories": ["Notes"],
        "tags": ["AI"],
        "url": "/notes/CS50_04_AI_NOTES/",
        "teaser": null
      },{
        "title": "CS50 Notes",
        "excerpt":"01 Knowledge Representing information and drawing inferences from it. Basic terminology knowledge-based agents agents that reason by operating on internal representations of knowledge sentence an assertion about the world in a knowledge representation language model assignment of a truth value to every propositional symbol (a “possible world”) knowledge base a...","categories": ["Notes"],
        "tags": ["AI"],
        "url": "/notes/CS50_05_AI_NOTES/",
        "teaser": null
      },{
        "title": "CS50 Notes",
        "excerpt":"01 Knowledge Representing information and drawing inferences from it. Basic terminology knowledge-based agents agents that reason by operating on internal representations of knowledge sentence an assertion about the world in a knowledge representation language model assignment of a truth value to every propositional symbol (a “possible world”) knowledge base a...","categories": ["Notes"],
        "tags": ["AI"],
        "url": "/notes/CS50_06_AI_NOTES/",
        "teaser": null
      },{
        "title": "Study of R",
        "excerpt":"01 Basic 下载数据集 R 内置了很多的数据。 再练习的时候，往往可以使用R 自己提供的数据，这些数据是一些真实的数据，可以当作学习/练习的样本。 代码的格式如下： (这里的代码是要打进console 之中) # installing the dslabs package install.packages(\"dslabs\") 使用这个数据 （这里的代码要打进xxx.r 文件之中） # loading the dslabs package into the R session library(dslabs) 或者使用 GUI （用鼠标点点点） [Tools] -&gt; [install packages] install.packages(\"dslabs\") # to install a single package install.packages(c(\"tidyverse\", \"dslabs\")） # to install two packages...","categories": ["Notes"],
        "tags": ["Data Science"],
        "url": "/notes/R_NOTES/",
        "teaser": null
      },{
        "title": "Study of GO",
        "excerpt":"学习 Go 的笔记 变量 强类型和弱类型都可以支持 赋值 - 强类型 //var 变量名 变量类型 = 值 var i int = 1 赋值 - 弱类型 //变量名 := 值 i := 1 根据值来判断类型，所以必须初始化 变量类型 bool string int, int8, int16, int32, int64 uint, uint8, uint16, uint32, uint64 byte = unit8 rune = int32(uncode code point) float32,...","categories": ["Notes"],
        "tags": ["Data Science","Go"],
        "url": "/notes/GO_NOTES/",
        "teaser": null
      },{
        "title": "Study of Python",
        "excerpt":"01 Basic   # 等待补全  ","categories": ["Notes"],
        "tags": ["Python","Data Science"],
        "url": "/notes/Python_NOTES/",
        "teaser": null
      },{
        "title": "Binary Tree Preorder Traversal",
        "excerpt":"&lt;-E 144&gt; Binary Tree Preorder Traversal /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode *left, TreeNode *right) :...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/144-Binary-Tree-Preorder-Traversal/",
        "teaser": null
      },{
        "title": "Binary Tree Postorder Traversal",
        "excerpt":"&lt;-E 145&gt; Binary Tree Postorder Traversal /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode *left, TreeNode *right) :...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/145-Binary-Tree-Postorder-Traversal/",
        "teaser": null
      },{
        "title": "Binary Tree Inorder Traversal",
        "excerpt":"&lt;-E 94&gt; Binary Tree Inorder Traversal /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode *left, TreeNode *right) :...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/94-Binary-Tree-Inorder-Traversal/",
        "teaser": null
      },{
        "title": "Check If All 1's Are at Least Length K Places Away",
        "excerpt":"&lt;-E 1437&gt; Check If All 1’s Are at Least Length K Places Away class Solution { public: bool kLengthApart(vector&lt;int&gt;&amp; nums, int k) { int pre = -100000; for(int i = 0; i &lt; nums.size(); i++) { if(nums[i] == 1 ) { if(i - pre - 1 &lt; k) return false;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1437-Check-If-All-1's-Are-at-Least-Length-K-Places-Away/",
        "teaser": null
      },{
        "title": "Counting Bits",
        "excerpt":"&lt;-E 338&gt; Counting Bits   class Solution { public:     vector&lt;int&gt; countBits(int n) {         vector&lt;int&gt; t(n+1, 0);                  for(int i = 1; i &lt;= n; ++i)             t[i] = t[i/2] + i%2;                  return t;     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/338-Counting-Bits/",
        "teaser": null
      },{
        "title": "Teemo Attacking",
        "excerpt":"&lt;-E 495&gt; Teemo Attacking class Solution { public: int findPoisonedDuration(vector&lt;int&gt;&amp; timeSeries, int duration) { int cnt = 0; int n = timeSeries.size(); for(int i = 0; i &lt; n-1;++i){ if(timeSeries[i] + duration &lt;= timeSeries[i+1]){ cnt += duration; } else{ cnt+= (timeSeries[i+1] - timeSeries[i]); } } cnt += duration; return cnt;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/495-Teemo-Attacking/",
        "teaser": null
      },{
        "title": "Maximum Units on a Truck",
        "excerpt":"&lt;-E 1710&gt; Maximum Units on a Truck class Solution { public: int maximumUnits(vector&lt;vector&lt;int&gt;&gt;&amp; boxTypes, int truckSize) { int n = boxTypes.size(); int ans = 0; int sum = 0; vector&lt;pair&lt;int, int&gt;&gt; v; for (int i = 0; i &lt; n; i++) v.push_back({boxTypes[i][1], boxTypes[i][0]}); sort(v.begin(), v.end(), greater&lt;&gt;()); for (int i =...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1710-Maximum-Units-on-a-Truck/",
        "teaser": null
      },{
        "title": "Calculate Money in Leetcode Bank",
        "excerpt":"&lt;-E 1716&gt; Calculate Money in Leetcode Bank   class Solution { public:     int totalMoney(int n) {         int total{0};         int week{1}, accrue{1};                  for(int i{1}; i &lt;= n; i++){             if(i - 1 == 7 * week){                 ++week;                 accrue = week;             }                          total += accrue;             accrue++;         }          return total;            } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1716-Calculate-Money-in-Leetcode-Bank/",
        "teaser": null
      },{
        "title": "Decode XORed Array",
        "excerpt":"&lt;-E 1720&gt; Decode XORed Array   class Solution { public:     vector&lt;int&gt; decode(vector&lt;int&gt;&amp; encoded, int first) {         vector&lt;int&gt; v;         v.push_back(first);           for(auto i : encoded){             int s = v.back() ^ i;               v.push_back(s);           }         return v;     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1720-Decode-XORed-Array/",
        "teaser": null
      },{
        "title": "Number Of Rectangles That Can Form The Largest Square",
        "excerpt":"&lt;-E 1725&gt; Number Of Rectangles That Can Form The Largest Square //method 1 class Solution { public: int countGoodRectangles(vector&lt;vector&lt;int&gt;&gt;&amp; rectangles) { vector &lt;int&gt; v; int s = rectangles.size(); for (int i = 0; i&lt;s; i++){ int t = min(rectangles[i][0],rectangles[i][1]); v.push_back(t); } sort(v.begin(), v.end()); int res = 0; for (int i...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1725-Number-Of-Rectangles-That-Can-Form-The-Largest-Square/",
        "teaser": null
      },{
        "title": "Find the Highest Altitude",
        "excerpt":"&lt;-E 1732&gt; Find the Highest Altitude //method 1 class Solution { public: int largestAltitude(vector&lt;int&gt;&amp; gain) { int result = 0; int sum = 0; for(int i = 0; i &lt; gain.size(); ++i) { sum += gain[i]; result = max(result, sum); } return result; } }; //method 2 class Solution {...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1732-Find-the-Highest-Altitude/",
        "teaser": null
      },{
        "title": "Latest Time by Replacing Hidden Digits",
        "excerpt":"&lt;-E 1736&gt; Latest Time by Replacing Hidden Digits class Solution { public: string maximumTime(string time) { if(time[0] == '?' and time[1]&gt;='0' and time[1]&lt;='3') time[0] = '2'; if(time[0] == '?' and time[1]&gt;='4' and time[1]!='?') time[0] = '1'; if(time[0] == '?' and time[1] == '?') { time[0] = '2'; time[1] = '3';...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1736-Latest-Time-by-Replacing-Hidden-Digits/",
        "teaser": null
      },{
        "title": "Maximum Number of Balls in a Box",
        "excerpt":"&lt;-E 1742&gt; Maximum Number of Balls in a Box class Solution { public: int countBalls(int lowLimit, int highLimit) { int ans = 0; vector&lt;int&gt; v(46,0); for(int i = lowLimit; i &lt;= highLimit; i++){ int s = 0, n = i; while(n) { s += n % 10; n /= 10;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1742-Maximum-Number-of-Balls-in-a-Box/",
        "teaser": null
      },{
        "title": "Sum of Unique Elements",
        "excerpt":"&lt;-E 1748&gt; Sum of Unique Elements //method 1 class Solution { public: int sumOfUnique(vector&lt;int&gt;&amp; nums) { int sum = 0; for(auto i : nums){ if(count(nums.begin(),nums.end(),i)==1) { sum += i; } } return sum; } }; //method 2 class Solution { public: int sumOfUnique(vector&lt;int&gt;&amp; nums) { unordered_map&lt;int,int&gt; mp; for(auto i :...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1748-Sum-of-Unique-Elements/",
        "teaser": null
      },{
        "title": "Check if Array Is Sorted and Rotated",
        "excerpt":"&lt;-E 1752&gt; Check if Array Is Sorted and Rotated   class Solution { public:     bool check(vector&lt;int&gt;&amp; nums) {         int count = 0;         int n = nums.size();                  if(nums[n-1] &gt; nums[0])             count++;              for(int i = 0; i &lt; n-1; i++){             if(nums[i] &gt; nums[i+1])                 count++;         }         return count&lt;=1;     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1752-Check-if-Array-Is-Sorted-and-Rotated/",
        "teaser": null
      },{
        "title": "Minimum Changes To Make Alternating Binary String",
        "excerpt":"&lt;-E 1758&gt; Minimum Changes To Make Alternating Binary String //method 1 class Solution { public: int minOperations(string s) { int count = 0, ans = 0; for (int i = 0; i &lt; s.size(); i++) { if(i % 2 == 0) { if(s[i] == '1') ans++; else count++; } else...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1758-Minimum-Changes-To-Make-Alternating-Binary-String/",
        "teaser": null
      },{
        "title": "Longest Nice Substring",
        "excerpt":"&lt;-E 1763&gt; Longest Nice Substring //method 1 class Solution { public: string longestNiceSubstring(string s) { if(s.size() &lt; 2) return \"\"; unordered_set&lt;char&gt;st(s.begin(),s.end()); for(int i = 0; i &lt; s.size(); i++){ if(!st.count(toupper(s[i])) || !st.count(tolower(s[i]))) { string s1 = longestNiceSubstring(s.substr(0, i)); string s2 = longestNiceSubstring(s.substr(i + 1)); return s1.size() &gt;= s2.size() ? s1...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1763-Longest-Nice-Substring/",
        "teaser": null
      },{
        "title": "Merge Strings Alternately",
        "excerpt":"&lt;-E 1768&gt; Merge Strings Alternately class Solution { public: string mergeAlternately(string word1, string word2) { int n = max(word1.size(), word2.size()); string ans = \"\"; for(int i = 0; i &lt; n; i++) { if(word1.size() &gt; i) ans += word1[i]; if(word2.size() &gt; i) ans += word2[i]; } return ans; } };...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1768-Merge-Strings-Alternately/",
        "teaser": null
      },{
        "title": "Find Nearest Point That Has the Same X or Y Coordinate",
        "excerpt":"&lt;-E 1779&gt; Find Nearest Point That Has the Same X or Y Coordinate class Solution { public: int nearestValidPoint(int x, int y, vector&lt;vector&lt;int&gt;&gt;&amp; points) { int pos = -1; int ans = INT_MAX; for(int i = 0; i &lt; points.size(); i++){ if(points[i][0] == x or points[i][1] == y){ int dist...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1779-Find-Nearest-Point-That-Has-the-Same-X-or-Y-Coordinate/",
        "teaser": null
      },{
        "title": "Check if Binary String Has at Most One Segment of Ones",
        "excerpt":"&lt;-E 1784&gt; Check if Binary String Has at Most One Segment of Ones //method 1 class Solution { public: bool checkOnesSegment(string s) { bool consecutive{false}; int count{0}; for(char &amp;c : s){ if(c == '1' &amp;&amp; consecutive) return false; if(c == '1') count++; else{ if(!consecutive &amp;&amp; count &gt; 0) consecutive =...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1784-Check-if-Binary-String-Has-at-Most-One-Segment-of-Ones/",
        "teaser": null
      },{
        "title": "Check if One String Swap Can Make Strings Equal",
        "excerpt":"&lt;-E 1790&gt; Check if One String Swap Can Make Strings Equal //method 1 class Solution { public: bool areAlmostEqual(string s1, string s2) { vector&lt;char&gt; v2,v1; int n = s1.size(); for(int i = 0;i &lt; n;i++){ if(s1[i] != s2[i]){ v1.emplace_back(s1[i]); v2.emplace_back(s2[i]); } } if(v1.size() == 0) return true; else if(v1.size() !=...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1790-Check-if-One-String-Swap-Can-Make-Strings-Equal/",
        "teaser": null
      },{
        "title": "Find Center of Star Graph",
        "excerpt":"&lt;-E 1791&gt; Find Center of Star Graph //method 1 class Solution { public: int findCenter(vector&lt;vector&lt;int&gt;&gt;&amp; edges) { int a = edges[0][0]; int b = edges[0][1]; int c = edges[1][0]; int d = edges[1][1]; if (a == c || a == d) return a; else return b; } }; //method 2...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1791-Find-Center-of-Star-Graph/",
        "teaser": null
      },{
        "title": "Second Largest Digit in a String",
        "excerpt":"&lt;-E 1796&gt; Second Largest Digit in a String class Solution { public: int secondHighest(string s) { int maxm = -1; int preMax = -1; for(auto ch: s){ if(isdigit(ch)){ ch = ch - '0'; if(ch &gt; maxm){ preMax = maxm; maxm = ch; } else if(ch != maxm &amp;&amp; ch &gt;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1796-Second-Largest-Digit-in-a-String/",
        "teaser": null
      },{
        "title": "Maximum Ascending Subarray Sum",
        "excerpt":"&lt;-E 1800&gt; Maximum Ascending Subarray Sum class Solution { public: int maxAscendingSum(vector&lt;int&gt;&amp; nums) { int csum = nums[0]; int ans = nums[0]; for(int i = 1 ; i &lt; nums.size() ; ++i ){ if(nums[i] &gt; nums[i-1] ){ csum += nums[i] ; } else csum = nums[i] ; ans = max(ans,csum)...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1800-Maximum-Ascending-Subarray-Sum/",
        "teaser": null
      },{
        "title": "Number of Different Integers in a String",
        "excerpt":"&lt;-E 1805&gt; Number of Different Integers in a String //method 1 class Solution { public: int numDifferentIntegers(string word) { unordered_set&lt;string&gt; set; string num = \"\"; int n = word.size(); for (int i = 0; i &lt;= n; ++i) { if (i == n || isalpha(word[i])) { if (i &amp;&amp; isdigit(word[i-1]))...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1805-Number-of-Different-Integers-in-a-String/",
        "teaser": null
      },{
        "title": "Determine Color of a Chessboard Square",
        "excerpt":"&lt;-E 1812&gt; Determine Color of a Chessboard Square   class Solution { public:     bool squareIsWhite(string coordinates) {         return (coordinates[0] - 'a' + coordinates[1] - '1') % 2 == 1;     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1812-Determine-Color-of-a-Chessboard-Square/",
        "teaser": null
      },{
        "title": "Truncate Sentence",
        "excerpt":"&lt;-E 1816&gt; Truncate Sentence //method 1 class Solution { public: string truncateSentence(string s, int k) { string ans = \"\"; int flag = 0; for(char c : s){ if(c == ' ') flag++; if(flag == k) break; ans += c; } return ans; } }; //Method 2 class Solution {...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1816-Truncate-Sentence/",
        "teaser": null
      },{
        "title": "Replace All Digits with Characters",
        "excerpt":"&lt;-E 1844&gt; Replace All Digits with Characters   class Solution { public:     string replaceDigits(string s) {         for(int i = 1; i &lt; s.length(); i += 2) {             s[i] = char(s[i - 1] + (s[i] - '0'));         }            return s;     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1844-Replace-All-Digits-with-Characters/",
        "teaser": null
      },{
        "title": "Minimum Distance to the Target Element",
        "excerpt":"&lt;-E 1848&gt; Minimum Distance to the Target Element   class Solution { public:     int getMinDistance(vector&lt;int&gt;&amp; nums, int target, int start) {         int ans = INT_MAX;         for(int i = 0; i &lt; nums.size(); i++)             if(nums[i] == target)                      ans = min(ans, abs(start - i));         return ans;     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1848-Minimum-Distance-to-the-Target-Element/",
        "teaser": null
      },{
        "title": "Maximum Population Year",
        "excerpt":"&lt;-E 1854&gt; Maximum Population Year class Solution { public: int maximumPopulation(vector&lt;vector&lt;int&gt;&gt;&amp; logs) { vector&lt;int&gt; cnt(101, 0); for (auto &amp;log: logs) { ++cnt[log[0]-1950]; --cnt[log[1]-1950]; } int resy = -1, maxc = 0, curc = 0; for (int i = 0; i &lt;= 100; ++i) { curc += cnt[i]; if (curc &gt;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1854-Maximum-Population-Year/",
        "teaser": null
      },{
        "title": "Sorting the Sentence",
        "excerpt":"&lt;-E 1859&gt; Sorting the Sentence class Solution { public: string sortSentence(string s) { vector&lt;string&gt; words(10); stringstream ss(s); string str; while(ss &gt;&gt; str) { int index = str[str.length() - 1] - '0'; str.pop_back(); words[index] = str; } str = \"\"; for(int i = 1; i &lt;= 10; i++) if(words[i] != \"\")...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1859-Sorting-the-Sentence/",
        "teaser": null
      },{
        "title": "Sum of All Subset XOR Totals",
        "excerpt":"&lt;-E 1863&gt; Sum of All Subset XOR Totals // Method 1 class Solution { public: int subsetXORSum(vector&lt;int&gt;&amp; nums) { int sum = 0; int mx = (1 &lt;&lt; nums.size()); for(int i = 0; i &lt; mx; i++){ int numxor = 0; for(int j = 0; j &lt; nums.size(); j++){ if(i...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1863-Sum-of-All-Subset-XOR-Totals/",
        "teaser": null
      },{
        "title": "Longer Contiguous Segments of Ones than Zeros",
        "excerpt":"&lt;-E 1869&gt; Longer Contiguous Segments of Ones than Zeros class Solution { public: bool checkZeroOnes(string s) { int zmax = 0,omax = 0; int zcnt = 0,ocnt = 0; for(char i : s){ if(i == '1'){ omax = max(omax, ++ocnt); zcnt = 0; } else{ zmax = max(zmax, ++zcnt); ocnt...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1869-Longer-Contiguous-Segments-of-Ones-than-Zeros/",
        "teaser": null
      },{
        "title": "Substrings of Size Three with Distinct Characters",
        "excerpt":"&lt;-E 1876&gt; Substrings of Size Three with Distinct Characters class Solution { public: int countGoodSubstrings(string s) { if(s.size() &lt; 3) return 0; int ans = 0; for(int i = 0; i &lt; s.size() - 2; i++) { if(s[i] != s[i+1] &amp;&amp; s[i+1] != s[i+2] &amp;&amp; s[i] != s[i+2]) ans++; }...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1876-Substrings-of-Size-Three-with-Distinct-Characters/",
        "teaser": null
      },{
        "title": "Minimum Depth of Binary Tree",
        "excerpt":"&lt;-E 111&gt; Minimum Depth of Binary Tree /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode *left, TreeNode *right)...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/111-Minimum-Depth-of-Binary-Tree/",
        "teaser": null
      },{
        "title": "Check if Word Equals Summation of Two Words",
        "excerpt":"&lt;-E 1880&gt; Check if Word Equals Summation of Two Words //method 1 class Solution { public: bool isSumEqual(string firstWord, string secondWord, string targetWord) { string s1=\"\",s2=\"\",s3=\"\"; for(int i=0;i&lt;firstWord.size();i++) { int x= firstWord[i] - 97; string s=to_string(x); s1=s1+s; } for(int i=0;i&lt;secondWord.size();i++) { int x= secondWord[i] - 97; string s=to_string(x); s2=s2+s; }...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1880-Check-if-Word-Equals-Summation-of-Two-Words/",
        "teaser": null
      },{
        "title": "Determine Whether Matrix Can Be Obtained By Rotation",
        "excerpt":"&lt;-E 1886&gt; Determine Whether Matrix Can Be Obtained By Rotation class Solution { public: bool findRotation(vector&lt;vector&lt;int&gt;&gt;&amp; mat, vector&lt;vector&lt;int&gt;&gt;&amp; tar) { if(mat == tar) return true; int d = 3; while(d--){ for(int i = 0; i &lt; mat.size(); i++) for(int j = i + 1; j &lt; mat.size(); j++) swap(mat[i][j], mat[j][i]);...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1886-Determine-Whether-Matrix-Can-Be-Obtained-By-Rotation/",
        "teaser": null
      },{
        "title": "Check if All the Integers in a Range Are Covered",
        "excerpt":"&lt;-E 1893&gt; Check if All the Integers in a Range Are Covered class Solution { public: bool isCovered(vector&lt;vector&lt;int&gt;&gt;&amp; ranges, int left, int right) { for(int i = left; i &lt;= right; i++) { bool flag = false; for(int j = 0; j &lt; ranges.size(); j++) { if(ranges[j][0]&lt;=i&amp;&amp;ranges[j][1]&gt;=i) { flag =...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1893-Check-if-All-the-Integers-in-a-Range-Are-Covered/",
        "teaser": null
      },{
        "title": "Redistribute Characters to Make All Strings Equal",
        "excerpt":"&lt;-E 1897&gt; Redistribute Characters to Make All Strings Equal class Solution { public: bool makeEqual(vector&lt;string&gt;&amp; words) { int freq[26] = {0}; for (auto word : words) for (auto c : word) freq[c - 'a']++; for (int i = 0; i &lt; 26; i++) if (freq[i] &amp;&amp; freq[i] % words.size() !=...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1897-Redistribute-Characters-to-Make-All-Strings-Equal/",
        "teaser": null
      },{
        "title": "Remove One Element to Make the Array Strictly Increasing",
        "excerpt":"&lt;-E 1909&gt; Remove One Element to Make the Array Strictly Increasing class Solution { public: bool canBeIncreasing(vector&lt;int&gt;&amp; nums) { int count = 0; for(int i=0;i &lt; nums.size()-1 &amp;&amp; count &lt; 2; i++) { if(nums[i]&gt;=nums[i+1]) { count++; if(i &gt; 0 &amp;&amp; nums[i+1] &lt;= nums[i-1]) nums[i+1] = nums[i]; } } return count...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1909-Remove-One-Element-to-Make-the-Array-Strictly-Increasing/",
        "teaser": null
      },{
        "title": "Maximum Product Difference Between Two Pairs",
        "excerpt":"&lt;-E 1913&gt; Maximum Product Difference Between Two Pairs   class Solution { public:     int maxProductDifference(vector&lt;int&gt;&amp; nums) {         sort(nums.begin(), nums.end());         return  (nums[nums.size() - 1] * nums[nums.size() - 2]) - (nums[0] * nums[1]);     } };  ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1913-Maximum-Product-Difference-Between-Two-Pairs/",
        "teaser": null
      },{
        "title": "Build Array from Permutation",
        "excerpt":"&lt;-E 1920&gt; Build Array from Permutation   class Solution { public:     vector&lt;int&gt; buildArray(vector&lt;int&gt;&amp; nums) {         vector&lt;int&gt; ans(nums.size(),0);         for(int i = 0; i != nums.size(); i++) {             ans[i] = nums[nums[i]];         }         return ans;     } };  ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1920-Build-Array-from-Permutation/",
        "teaser": null
      },{
        "title": "Count Square Sum Triples",
        "excerpt":"&lt;-E 1925&gt; Count Square Sum Triples // Method 1 class Solution { public: int countTriples(int n) { int count = 0; for(int i = 1; i &lt;= n; i++) { for(int j = 1;j &lt;= n; j++) { int sum = i*i + j*j; int t = sqrt(sum); if(t *...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1925-Count-Square-Sum-Triples/",
        "teaser": null
      },{
        "title": "Concatenation of Array",
        "excerpt":"&lt;-E 1929&gt; Concatenation of Array // Method 1 class Solution { public: vector&lt;int&gt; getConcatenation(vector&lt;int&gt;&amp; nums) { int n = nums.size(); vector&lt;int&gt; ans(n * 2, 0); for(int i = 0; i != n; i++) { ans[i] = nums[i]; ans[i + n] = nums[i]; } return ans; } }; // Method 2...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1929-Concatenation-of-Array/",
        "teaser": null
      },{
        "title": "Maximum Number of Words You Can Type",
        "excerpt":"&lt;-E 1935&gt; Maximum Number of Words You Can Type // Method 1 class Solution { public: int canBeTypedWords(string text, string brokenLetters) { int check[26] = {0}; for(auto c : brokenLetters) check[c -'a'] = 1; bool cannot = false; int ans = 0; for(auto c : text) { if(c == '...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1935-Maximum-Number-of-Words-You-Can-Type/",
        "teaser": null
      },{
        "title": "Check if All Characters Have Equal Number of Occurrences",
        "excerpt":"&lt;-E 1941&gt; Check if All Characters Have Equal Number of Occurrences // Method 1 class Solution { public: bool areOccurrencesEqual(string s) { int check[26] = {0}; for(auto c : s) { check[c - 'a']++; } int temp = 0; for(auto i : check) { if(temp == 0 &amp;&amp; i !=...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1941-Check-if-All-Characters-Have-Equal-Number-of-Occurrences/",
        "teaser": null
      },{
        "title": "Sum of Digits of String After Convert",
        "excerpt":"&lt;-E 1945&gt; Sum of Digits of String After Convert // Method 1 class Solution { public: int getLucky(string s, int k) { int n = s.length(); int sum = 0; string str = \"\"; for(int i = 0; i &lt; n; i++) { str+=to_string(s[i] - 'a'); } while(k--){ sum =...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1945-Sum-of-Digits-of-String-After-Convert/",
        "teaser": null
      },{
        "title": "Three Divisors",
        "excerpt":"&lt;-E 1952&gt; Three Divisors class Solution { bool isPrime(int n) { if (n &lt;= 1) return false; for (int i = 2; i * i &lt;= n; i++) if (n % i == 0) return false; return true; } public: bool isThree(int n) { int s = sqrt(n); return s...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1952-Three-Divisors/",
        "teaser": null
      },{
        "title": "Delete Characters to Make Fancy String",
        "excerpt":"&lt;-E 1957&gt; Delete Characters to Make Fancy String // Method 1 class Solution { public: string makeFancyString(string s) { string res = \"\"; for (int i = 0; i &lt; s.size(); ++i) { if (i &lt; 2 || s[i] != s[i-1] || s[i] != s[i-2]) { res += s[i]; }...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1957-Delete-Characters-to-Make-Fancy-String/",
        "teaser": null
      },{
        "title": "Check If String Is a Prefix of Array",
        "excerpt":"&lt;-E 1961&gt; Check If String Is a Prefix of Array class Solution { public: bool isPrefixString(string s, vector&lt;string&gt;&amp; words) { int i = 0; for(auto word : words) { bool check = true; for (auto c : word) { if(check == true) { if(c != s[i]) check = false; }...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1961-Check-If-String-Is-a-Prefix-of-Array/",
        "teaser": null
      },{
        "title": "Number of Strings That Appear as Substrings in Word",
        "excerpt":"&lt;-E 1967&gt; Number of Strings That Appear as Substrings in Word   class Solution { public:     int numOfStrings(vector&lt;string&gt;&amp; patterns, string word) {         int count = 0;         for(int i=0; i &lt; patterns.size(); i++) {             if(word.find(patterns[i]) != string::npos)                 count++;         }         return count;     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1967-Number-of-Strings-That-Appear-as-Substrings-in-Word/",
        "teaser": null
      },{
        "title": "Find if Path Exists in Graph",
        "excerpt":"&lt;-E 1971&gt; Find if Path Exists in Graph // Method 1 class Solution { public: bool validPath(int n, vector&lt;vector&lt;int&gt;&gt;&amp; edges, int source, int destination) { vector&lt;bool&gt;b(n+1,false); unordered_map&lt;int,vector&lt;int&gt;&gt;m; for(auto i : edges) { m[i[0]].emplace_back(i[1]); m[i[1]].emplace_back(i[0]); } queue&lt;int&gt;q; q.push(source); b[source] = true; while(!q.empty()) { int t = q.front(); q.pop(); for(int i =...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1971-Find-if-Path-Exists-in-Graph/",
        "teaser": null
      },{
        "title": "Minimum Time to Type Word Using Special Typewriter",
        "excerpt":"&lt;-E 1974&gt; Minimum Time to Type Word Using Special Typewriter //method 1 class Solution { public: int minTimeToType(const string&amp; s) { int steps = 0; char cur = 'a'; for (const char&amp; c : s) { int step = minStep(cur, c); cur = c; steps += (step + 1); }...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1974-Minimum-Time-to-Type-Word-Using-Special-Typewriter/",
        "teaser": null
      },{
        "title": "Find Greatest Common Divisor of Array",
        "excerpt":"&lt;-E 1979&gt; Find Greatest Common Divisor of Array //method 1 class Solution { public: int findGCD(vector&lt;int&gt;&amp; nums) { int max = *max_element(nums.begin(), nums.end()); int min = *min_element(nums.begin(), nums.end()); return gcd(max,min); } };í // Method 2 class Solution { public: int gcd(int a, int b){ if(b == 0){ return a; }else{...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1979-Find-Greatest-Common-Divisor-of-Array/",
        "teaser": null
      },{
        "title": "Minimum Difference Between Highest and Lowest of K Scores",
        "excerpt":"&lt;-E 1984&gt; Minimum Difference Between Highest and Lowest of K Scores class Solution { public: int minimumDifference(vector&lt;int&gt;&amp; nums, int k) { if(nums.size() &lt; 2 || k==1) return 0; sort(nums.begin(), nums.end()); int res = INT_MAX; for(int i = k - 1;i &lt; nums.size(); i++) res = min(res, nums[i]-nums[i-k+1]); return res; }...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1984-Minimum-Difference-Between-Highest-and-Lowest-of-K-Scores/",
        "teaser": null
      },{
        "title": "Find the Middle Index in Array",
        "excerpt":"&lt;-E 1991&gt; Find the Middle Index in Array   class Solution { public:     int findMiddleIndex(vector&lt;int&gt;&amp; nums) {         auto sum = accumulate(nums.begin(), nums.end(), 0), leftSum = 0;         for(int i=0;i&lt;nums.size();i++){             if(leftSum == sum - leftSum - nums[i]) return i;             leftSum += nums[i];         }         return -1;       } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1991-Find-the-Middle-Index-in-Array/",
        "teaser": null
      },{
        "title": "Count Special Quadruplets",
        "excerpt":"&lt;-E 1995&gt; Count Special Quadruplets //method 1 // class Solution { // public: // int countQuadruplets(vector&lt;int&gt;&amp; nums) { // int ans=0; // int n=nums.size(); // for(int i=0;i&lt;n;i++) { // for(int j=i+1;j&lt;n;j++) { // for(int k=j+1;k&lt;n;k++) { // for(int l=k+1;l&lt;n;l++) { // if(nums[i]+nums[j]+nums[k]==nums[l]) // ans++; // } // } // }...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1995-Count-Special-Quadruplets/",
        "teaser": null
      },{
        "title": "Reverse Prefix of Word",
        "excerpt":"&lt;-E 2000&gt; Reverse Prefix of Word //Method 1 class Solution { public: string reversePrefix(string word, char ch) { for(int i = 0; i &lt; word.length(); i++) { if(word[i] == ch) { reverse(word.begin(), word.begin()+i+1); break; } } return word; } }; // Method 2 class Solution { public: string reversePrefix(string word,...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2000-Reverse-Prefix-of-Word/",
        "teaser": null
      },{
        "title": "Count Number of Pairs With Absolute Difference K",
        "excerpt":"&lt;-E 2006&gt; Count Number of Pairs With Absolute Difference K class Solution { public: int countKDifference(vector&lt;int&gt;&amp; nums, int k) { int ans = 0; int count[101] = {0}; for(int i = 0; i &lt; nums.size(); i++){ count[nums[i]]++; } for(int i = 1; i &lt; 101-k; i++){ ans += count[i]*count[i+k]; }...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2006-Count-Number-of-Pairs-With-Absolute-Difference-K/",
        "teaser": null
      },{
        "title": "Final Value of Variable After Performing Operations",
        "excerpt":"&lt;-E 2011&gt; Final Value of Variable After Performing Operations // Method 1 class Solution { public: int finalValueAfterOperations(vector&lt;string&gt;&amp; operations) { int x = 0; for(auto op : operations){ (op == \"X++\" || op == \"++X\") ? x+=1 : x-=1; } return x; } }; // Method 2 class Solution {...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2011-Final-Value-of-Variable-After-Performing-Operations/",
        "teaser": null
      },{
        "title": "Maximum Difference Between Increasing Elements",
        "excerpt":"&lt;-E 2016&gt; Maximum Difference Between Increasing Elements   class Solution { public:     int maximumDifference(vector&lt;int&gt;&amp; nums) {         int result = 0, prefix = INT_MAX;         for (auto x : nums) {             result = max(result, x - prefix);             prefix = min(prefix, x);         }         return result ? result : -1;     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2016-Maximum-Difference-Between-Increasing-Elements/",
        "teaser": null
      },{
        "title": "Convert 1D Array Into 2D Array",
        "excerpt":"&lt;-E 2022&gt; Convert 1D Array Into 2D Array class Solution { public: vector&lt;vector&lt;int&gt;&gt; construct2DArray(vector&lt;int&gt;&amp; original, int m, int n) { if(original.size() != m * n) return {}; vector&lt;vector&lt;int&gt;&gt; ans(m, vector&lt;int&gt;(n)); for(int i = 0, j = 0, k = 0; i&lt;original.size(); i++, j++){ if(j == n){ k++; j = 0;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2022-Convert-1D-Array-Into-2D-Array/",
        "teaser": null
      },{
        "title": "Minimum Moves to Convert String",
        "excerpt":"&lt;-E 2027&gt; Minimum Moves to Convert String   class Solution { public:     int minimumMoves(string s) {         int res = 0;         for(int i = 0; i &lt; s.size(); i++){             if(s[i] == 'X'){                 res++;                 i += 2;             }         }         return res;     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2027-Minimum-Moves-to-Convert-String/",
        "teaser": null
      },{
        "title": "Two Out of Three",
        "excerpt":"&lt;-E 2032&gt; Two Out of Three // Method 1 class Solution { public: vector&lt;int&gt; twoOutOfThree(vector&lt;int&gt;&amp; nums1, vector&lt;int&gt;&amp; nums2, vector&lt;int&gt;&amp; nums3) { int check[101] = {0}; for(auto i : nums1) { if(check[i] == 0) check[i] = 1; } for(auto i : nums2) { if(check[i] == 1) check[i] = -1; if(check[i] ==...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2032-Two-Out-of-Three/",
        "teaser": null
      },{
        "title": "Minimum Number of Moves to Seat Everyone",
        "excerpt":"&lt;-E 2037&gt; Minimum Number of Moves to Seat Everyone   class Solution { public:     int minMovesToSeat(vector&lt;int&gt;&amp; seats, vector&lt;int&gt;&amp; students) {         sort(seats.begin(),seats.end());         sort(students.begin(),students.end());         int ans = 0;         for(int i = 0; i &lt; seats.size(); i++) {             ans = ans + abs(seats[i] - students[i]);         }         return ans;     } };  ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2037-Minimum-Number-of-Moves-to-Seat-Everyone/",
        "teaser": null
      },{
        "title": "Check if Numbers Are Ascending in a Sentence",
        "excerpt":"&lt;-E 2042&gt; Check if Numbers Are Ascending in a Sentence class Solution { public: bool areNumbersAscending(string s) { int prev = INT_MIN; int temp = 0; for(int i = 0; i &lt; s.size(); i++) { if(s[i] &lt;= '9' &amp;&amp; s[i] &gt;= '0') { if(i + 1 &lt; s.size() &amp;&amp; (s[i+1]...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2042-Check-if-Numbers-Are-Ascending-in-a-Sentence/",
        "teaser": null
      },{
        "title": "Number of Valid Words in a Sentence",
        "excerpt":"&lt;-E 2047&gt; Number of Valid Words in a Sentence class Solution { public: bool solve(string s) { int n = s.size(); int hy = 0; for(int i = 0; i &lt; n; i++) { if(isalpha(s[i])) continue; else if(isdigit(s[i])) return false; else if((s[i] == '.' || s[i] == ',' || s[i]...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2047-Number-of-Valid-Words-in-a-Sentence/",
        "teaser": null
      },{
        "title": "Kth Distinct String in an Array",
        "excerpt":"&lt;-E 2053&gt; Kth Distinct String in an Array   class Solution { public:     string kthDistinct(vector&lt;string&gt;&amp; arr, int k) {         unordered_map &lt;string,int&gt; table;         for(auto s : arr)             table[s]++;         for(auto s : arr)             if(table[s] == 1 &amp;&amp; --k == 0)                 return s;         return \"\";      } };  ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2053-Kth-Distinct-String-in-an-Array/",
        "teaser": null
      },{
        "title": "Smallest Index With Equal Value",
        "excerpt":"&lt;-E 2057&gt; Smallest Index With Equal Value   class Solution { public:     int smallestEqual(vector&lt;int&gt;&amp; nums) {         for(int i = 0; i&lt; nums.size(); i++){             if(i % 10 == nums[i])                 return i;         }         return -1;     } };  ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2057-Smallest-Index-With-Equal-Value/",
        "teaser": null
      },{
        "title": "Count Vowel Substrings of a String",
        "excerpt":"&lt;-E 2062&gt; Count Vowel Substrings of a String class Solution { public: int countVowelSubstrings(string word) { unordered_map&lt;char,int&gt; m; int n = word.size(); int ans = 0; for(int i = 0,cnt = 0,j = 0,pref = 0; i &lt; n; i++) { if((word[i] == 'a'|| word[i] == 'e'|| word[i] == 'i'||...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2062-Count-Vowel-Substrings-of-a-String/",
        "teaser": null
      },{
        "title": "Check Whether Two Strings are Almost Equivalent",
        "excerpt":"&lt;-E 2068&gt; Check Whether Two Strings are Almost Equivalent class Solution { public: bool checkAlmostEquivalent(string word1, string word2) { int check_1[26] = {0}; int check_2[26] = {0}; for(auto c : word1) { check_1[c - 'a']++; } for(auto c : word2) { check_2[c - 'a']++; } for(int i = 0; i...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2068-Check-Whether-Two-Strings-are-Almost-Equivalent/",
        "teaser": null
      },{
        "title": "Time Needed to Buy Tickets",
        "excerpt":"&lt;-E 2073&gt; Time Needed to Buy Tickets class Solution { public: int timeRequiredToBuy(vector&lt;int&gt;&amp; tickets, int k) { int res = 0; for(int i = 0; i &lt;= k; i++) { res += min(tickets[k], tickets[i]); } for(int i = k + 1; i &lt; tickets.size(); i++) { res += min(tickets[k] -...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2073-Time-Needed-to-Buy-Tickets/",
        "teaser": null
      },{
        "title": "Two Furthest Houses With Different Colors",
        "excerpt":"&lt;-E 2078&gt; Two Furthest Houses With Different Colors class Solution { public: int maxDistance(vector&lt;int&gt;&amp; colors) { int result = 0; int size = colors.size(); for(int x = 0; x &lt; size; x++){ for(int y = x + 1; y &lt; size; y++){ if(colors[x] != colors[y]) result = max(result, abs(x -...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2078-Two-Furthest-Houses-With-Different-Colors/",
        "teaser": null
      },{
        "title": "Count Common Words With One Occurrence",
        "excerpt":"&lt;-E 2085&gt; Count Common Words With One Occurrence class Solution { public: int countWords(vector&lt;string&gt;&amp; words1, vector&lt;string&gt;&amp; words2) { unordered_map&lt;string, int&gt; mp1; unordered_map&lt;string, int&gt; mp2; for (auto x : words1) mp1[x]++; for (auto x : words2) mp2[x]++; int k = 0; for (auto x : mp1) { string s = x.first;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2085-Count-Common-Words-With-One-Occurrence/",
        "teaser": null
      },{
        "title": "Find Target Indices After Sorting Array",
        "excerpt":"&lt;-E 2089&gt; Find Target Indices After Sorting Array // Method 1 class Solution { public: vector&lt;int&gt; targetIndices(vector&lt;int&gt;&amp; nums, int target) { sort(nums.begin(), nums.end()); vector&lt;int&gt; ans; for(int i = 0; i != nums.size(); i++) { if(nums[i] == target) { ans.push_back(i); } } return ans; } }; // Method 2 class Solution...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2089-Find-Target-Indices-After-Sorting-Array/",
        "teaser": null
      },{
        "title": "Finding 3-Digit Even Numbers",
        "excerpt":"&lt;-E 2094&gt; Finding 3-Digit Even Numbers class Solution { public: vector&lt;int&gt; findEvenNumbers(vector&lt;int&gt;&amp; digits) { int count[10] = {0}; vector&lt;int&gt; res; for(int d : digits) count[d]++; for(int i = 1; i &lt; 10; i++) { if(count[i] == 0) continue; count[i]--; for(int j = 0; j &lt; 10; j++) { if(count[j] ==...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2094-Finding-3-Digit-Even-Numbers/",
        "teaser": null
      },{
        "title": "Find Subsequence of Length K With the Largest Sum",
        "excerpt":"&lt;-E 2099&gt; Find Subsequence of Length K With the Largest Sum   class Solution { public:     vector&lt;int&gt; maxSubsequence(vector&lt;int&gt;&amp; nums, int k) {         vector&lt;int&gt; ans,temp(nums.begin(),nums.end());          sort(temp.begin(),temp.end(),greater&lt;int&gt;());          temp.resize(k);          unordered_map&lt;int,int&gt; m;          for(int i : temp)             m[i]++;          for(int i : nums)             if(m[i] != 0) {                 ans.push_back(i);                 m[i]--;             }          return ans;     } };  ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2099-Find-Subsequence-of-Length-K-With-the-Largest-Sum/",
        "teaser": null
      },{
        "title": "Rings and Rods",
        "excerpt":"&lt;-E 2103&gt; Rings and Rods // Method 1 class Solution { public: int countPoints(string rings) { unordered_map&lt;int,set&lt;char&gt;&gt; um; for(int i = 0; i &lt; rings.size() - 1; i+=2) { um[rings[i + 1]].insert(rings[i]); } int ans=0; for(auto i:um) if(i.second.size() == 3) ans++; return ans; } }; // Method 2 class Solution...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2103-Rings-and-Rods/",
        "teaser": null
      },{
        "title": "Find First Palindromic String in the Array",
        "excerpt":"&lt;-E 2108&gt; Find First Palindromic String in the Array class Solution { public: string firstPalindrome(vector&lt;string&gt;&amp; words) { for(auto word : words){ int p1 = 0; int p2 = word.size() - 1; string a = word; while(p1 &lt; p2){ if(a[p1] !=a [p2]) { break; } p1++; p2--; } if((p1 == p2)...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2108-Find-First-Palindromic-String-in-the-Array/",
        "teaser": null
      },{
        "title": "Maximum Number of Words Found in Sentences",
        "excerpt":"&lt;-E 2114&gt; Maximum Number of Words Found in Sentences // Method 1 class Solution { public: int mostWordsFound(vector&lt;string&gt;&amp; sentences) { int ans = 0; for(auto sentence : sentences) { int cn_words = 1; for(auto word : sentence) { if(word == ' ') cn_words++; } if(cn_words &gt; ans) ans = cn_words;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2114-Maximum-Number-of-Words-Found-in-Sentences/",
        "teaser": null
      },{
        "title": "A Number After a Double Reversal",
        "excerpt":"&lt;-E 2119&gt; A Number After a Double Reversal   class Solution { public:     bool isSameAfterReversals(int num) {         if(num == 0)             return true;         if(num % 10)             return true;         else             return false;     } };  ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2119-A-Number-After-a-Double-Reversal/",
        "teaser": null
      },{
        "title": "Check if All A's Appears Before All B's",
        "excerpt":"&lt;-E 2124&gt; Check if All A’s Appears Before All B’s   class Solution { public:     bool checkString(string s) {         int i = 0;         for(; i != s.size(); i++) {             if(s[i] == 'b')                 break;         }         if(find(s.begin() + i, s.end(), 'a') != s.end())             return false;         return true;     } };  ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2124-Check-if-All-A's-Appears-Before-All-B's/",
        "teaser": null
      },{
        "title": "Capitalize the Title",
        "excerpt":"&lt;-E 2129&gt; Capitalize the Title // Method 1 class Solution { public: string capitalizeTitle(string title) { for(int i = 0; i &lt; title.size(); i++) { if((i ==0 || title[i - 1]==' ') &amp;&amp; (i + 1 &lt; title.size() &amp;&amp; title[i + 1] !=' ' &amp;&amp; i + 2 &lt; title.size()...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2129-Capitalize-the-Title/",
        "teaser": null
      },{
        "title": "Check if Every Row and Column Contains All Numbers",
        "excerpt":"&lt;-E 2133&gt; Check if Every Row and Column Contains All Numbers // Method 1 class Solution { public: bool checkValid(vector&lt;vector&lt;int&gt;&gt;&amp; matrix) { if(matrix.size() != matrix[0].size()) return false; set&lt;int&gt; check_each; for(int i = 0; i != matrix.size(); i++) { for(int j = 0; j != matrix[0].size(); j++) { check_each.insert(matrix[i][j]); } if(matrix.size()...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2133-Check-if-Every-Row-and-Column-Contains-All-Numbers/",
        "teaser": null
      },{
        "title": "Divide a String Into Groups of Size k",
        "excerpt":"&lt;-E 2138&gt; Divide a String Into Groups of Size k class Solution { public: vector&lt;string&gt; divideString(string s, int k, char fill) { while(s.size() % k != 0) s += fill; vector&lt;string&gt; v; string sub; for(int i = 0; i &lt; s.size(); i = i + k) { sub = \"\";...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2138-Divide-a-String-Into-Groups-of-Size-k/",
        "teaser": null
      },{
        "title": "Minimum Cost of Buying Candies With Discount",
        "excerpt":"&lt;-E 2144&gt; Minimum Cost of Buying Candies With Discount   class Solution { public:     int minimumCost(vector&lt;int&gt;&amp; cost) {         sort(cost.begin(), cost.end(), greater&lt;int&gt;());         int ans = 0;         int k = 0;         for(auto i : cost) {             k++;             if(k == 3)                 k = 0;             else                 ans += i;         }         return ans;     } };  ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2144-Minimum-Cost-of-Buying-Candies-With-Discount/",
        "teaser": null
      },{
        "title": "Count Elements With Strictly Smaller and Greater Elements",
        "excerpt":"&lt;-E 2148&gt; Count Elements With Strictly Smaller and Greater Elements   class Solution { public:     int countElements(vector&lt;int&gt;&amp; nums) {         sort(nums.begin(), nums.end());         int check = 0;         for(auto i : nums) {             if(i == nums[0])                 check++;             else if(i == nums[nums.size() - 1])                 check++;         }         return nums.size() - check;     } };  ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2148-Count-Elements-With-Strictly-Smaller-and-Greater-Elements/",
        "teaser": null
      },{
        "title": "Minimum Sum of Four Digit Number After Splitting Digits",
        "excerpt":"&lt;-E 2160&gt; Minimum Sum of Four Digit Number After Splitting Digits   class Solution { public:     int minimumSum(int num) {         string s = to_string(num);         sort(s.begin(), s.end());          return (s[0] - '0' + s[1] - '0') * 10         + (s[2] - '0') + (s[3] - '0');     } };  ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2160-Minimum-Sum-of-Four-Digit-Number-After-Splitting-Digits/",
        "teaser": null
      },{
        "title": "Sort Even and Odd Indices Independently",
        "excerpt":"&lt;-E 2164&gt; Sort Even and Odd Indices Independently // Method 1 class Solution { public: vector&lt;int&gt; sortEvenOdd(vector&lt;int&gt;&amp; nums) { size_t size = nums.size(); priority_queue&lt;int, vector&lt;int&gt;, less&lt;int&gt;&gt; max_heap; priority_queue&lt;int, vector&lt;int&gt;, greater&lt;int&gt;&gt; min_heap; for (size_t s = 0; s &lt; size; s++) s % 2 == 0 ? min_heap.push(nums[s]) : max_heap.push(nums[s]); for...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2164-Sort-Even-and-Odd-Indices-Independently/",
        "teaser": null
      },{
        "title": "Count Operations to Obtain Zero",
        "excerpt":"&lt;-E 2169&gt; Count Operations to Obtain Zero   class Solution { public:     int countOperations(int num1, int num2) {          int ans = 0;         while(true) {             if(num1 == 0)                 break;             if(num2 == 0)                 break;             if(num2 &gt; num1)                 swap(num2, num1);             num1 = num1 - num2;             ans++;         }         return ans;     } };  ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2169-Count-Operations-to-Obtain-Zero/",
        "teaser": null
      },{
        "title": "Count Equal and Divisible Pairs in an Array",
        "excerpt":"&lt;-E 2176&gt; Count Equal and Divisible Pairs in an Array class Solution { public: int countPairs(vector&lt;int&gt;&amp; nums, int k) { int ans = 0; for(int i = 0; i != nums.size(); i++) { for(int j = i + 1; j &lt; nums.size(); j++) { if(nums[i] == nums[j]) { if(!(i *...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2176-Count-Equal-and-Divisible-Pairs-in-an-Array/",
        "teaser": null
      },{
        "title": "Count Integers With Even Digit Sum",
        "excerpt":"&lt;-E 2180&gt; Count Integers With Even Digit Sum class Solution { public: int findsum(int n) { int sum = 0; while (n &gt; 0) { sum += n % 10; n /= 10; } return sum; } int countEven(int num) { int r = num % 10; int q =...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2180-Count-Integers-With-Even-Digit-Sum/",
        "teaser": null
      },{
        "title": "Counting Words With a Given Prefix",
        "excerpt":"&lt;-E 2185&gt; Counting Words With a Given Prefix class Solution { public: int prefixCount(vector&lt;string&gt;&amp; words, string pref) { int ans = 0; for(auto word : words) { bool check = true; for(int i = 0; i != pref.size(); i++) { if(word[i] != pref[i]) { check = false; break; } if(i...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2185-Counting-Words-With-a-Given-Prefix/",
        "teaser": null
      },{
        "title": "Most Frequent Number Following Key In an Array",
        "excerpt":"&lt;-E 2190&gt; Most Frequent Number Following Key In an Array class Solution { public: int mostFrequent(vector&lt;int&gt;&amp; nums, int key) { unordered_map&lt;int, int&gt; h; for (int i = 0; i &lt; nums.size() - 1; i++) { if (nums[i] == key) { h[nums[i + 1]]++; } } int ret = 0, maxOccurence...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2190-Most-Frequent-Number-Following-Key-In-an-Array/",
        "teaser": null
      },{
        "title": "Cells in a Range on an Excel Sheet",
        "excerpt":"&lt;-E 2194&gt; Cells in a Range on an Excel Sheet   class Solution { public:     vector&lt;string&gt; cellsInRange(string s) {         vector&lt;string&gt; ans;         string a;          for(char i = s[0]; i &lt;= s[3]; i++) {             for(char j = s[1]; j &lt;= s[4]; j++) {                ans.push_back({i,j});             }         }         return ans;     } };  ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2194-Cells-in-a-Range-on-an-Excel-Sheet/",
        "teaser": null
      },{
        "title": "Find All K-Distant Indices in an Array",
        "excerpt":"&lt;-E 2200&gt; Find All K-Distant Indices in an Array // Method 1 class Solution { public: vector&lt;int&gt; findKDistantIndices(vector&lt;int&gt;&amp; nums, int key, int k) { int n=nums.size(); vector&lt;int&gt; v; for(int i = 0; i &lt; n; i++) { if(nums[i] == key) { int start = max(0, i - k); int end...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2200-Find-All-K-Distant-Indices-in-an-Array/",
        "teaser": null
      },{
        "title": "Divide Array Into Equal Pairs",
        "excerpt":"&lt;-E 2206&gt; Divide Array Into Equal Pairs   class Solution { public:     bool divideArray(vector&lt;int&gt;&amp; nums) {         unordered_map&lt;int, int&gt; check;         for(auto i : nums) {             check[i]++;         }         for(auto i : check) {             if(i.second % 2)                 return false;         }         return true;     } };   ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2206-Divide-Array-Into-Equal-Pairs/",
        "teaser": null
      },{
        "title": "Count Hills and Valleys in an Array",
        "excerpt":"&lt;-E 2210&gt; Count Hills and Valleys in an Array class Solution { public: int countHillValley(vector&lt;int&gt;&amp; nums) { nums.erase(unique(nums.begin(), nums.end()), nums.end()); int ret = 0; for (int i = 1; i &lt; nums.size() - 1; i++) { if ((nums[i] &gt; nums[i - 1]) == (nums[i] &gt; nums[i + 1])) { ++ret;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2210-Count-Hills-and-Valleys-in-an-Array/",
        "teaser": null
      },{
        "title": "Find the Difference of Two Arrays",
        "excerpt":"&lt;-E 2215&gt; Find the Difference of Two Arrays // Method 1 class Solution { public: vector&lt;vector&lt;int&gt;&gt; findDifference(vector&lt;int&gt;&amp; nums1, vector&lt;int&gt;&amp; nums2) { vector&lt;vector&lt;int&gt;&gt; ans(2); set&lt;int&gt; s1(nums1.begin(), nums1.end()); set&lt;int&gt; s2(nums2.begin(), nums2.end()); for(auto i : s2) if(!s1.count(i)) ans[1].push_back(i); for(auto i : s1) if(!s2.count(i)) ans[0].push_back(i); return ans; } }; // Method 1 class Solution...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2215-Find-the-Difference-of-Two-Arrays/",
        "teaser": null
      },{
        "title": "Minimum Bit Flips to Convert Number",
        "excerpt":"&lt;-E 2220&gt; Minimum Bit Flips to Convert Number   class Solution { public:     int minBitFlips(int start, int goal) {         int value = start ^ goal;         int count = 0;         while (value) {           value = value &amp; value - 1;           count++;         }         return count;     } };  ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2220.-Minimum-Bit-Flips-to-Convert-Number/",
        "teaser": null
      },{
        "title": "Minimum Number of Operations to Convert Time",
        "excerpt":"&lt;-E 2224&gt; Minimum Number of Operations to Convert Time class Solution { private: constexpr static int MINUTES_IN_DAY = 24 * 60; int getMinutes(const string&amp; t) { int hour = stoi(t.substr(0, 2)); int minute = stoi(t.substr(3)); return hour * 60 + minute; } public: int convertTime(string current, string correct) { int...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2224.-Minimum-Number-of-Operations-to-Convert-Time/",
        "teaser": null
      },{
        "title": "Largest Number After Digit Swaps by Parity",
        "excerpt":"&lt;-E 2231&gt; Largest Number After Digit Swaps by Parity class Solution { public: int largestInteger(int num) { priority_queue&lt;int&gt; p; priority_queue&lt;int&gt; q; string nums = to_string(num); int n = nums.size(); for(int i = 0; i &lt; n; i++){ int digit=nums[i] - '0'; if(digit % 2) p.push(digit); else q.push(digit); } int answer...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2231-Largest-Number-After-Digit-Swaps-by-Parity/",
        "teaser": null
      },{
        "title": "Add Two Integers",
        "excerpt":"&lt;-E 2235&gt; Add Two Integers   class Solution { public:     int sum(int num1, int num2) {         return num1 + num2;     } };  ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2235-Add-Two-Integers/",
        "teaser": null
      },{
        "title": "Root Equals Sum of Children",
        "excerpt":"&lt;-E 2236&gt; Root Equals Sum of Children /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode *left, TreeNode *right)...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2236-Root-Equals-Sum-of-Children/",
        "teaser": null
      },{
        "title": "Find Closest Number to Zero",
        "excerpt":"&lt;-E 2239&gt; Find Closest Number to Zero // Method 1 class Solution { public: int findClosestNumber(vector&lt;int&gt;&amp; nums) { sort(nums.begin(), nums.end()); if(nums[0] &gt; 0) return nums[0]; if (nums[nums.size() - 1] &lt; 0) return nums[nums.size() - 1]; bool check = false; for(int i = 0; i != nums.size(); i++) { if(nums[i] ==...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2239-Find-Closest-Number-to-Zero/",
        "teaser": null
      },{
        "title": "Calculate Digit Sum of a String",
        "excerpt":"&lt;-E 2243&gt; Calculate Digit Sum of a String class Solution { public: string digitSum(string s, int k) { while(s.length() &gt; k) { int i = 0 ; string tmp = \"\"; while (i &lt; s.length()) { int sum = 0; int cnt = 0; while (i &lt; s.length() &amp;&amp; cnt...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2243-Calculate-Digit-Sum-of-a-String/",
        "teaser": null
      },{
        "title": "Intersection of Multiple Arrays",
        "excerpt":"&lt;-E 2248&gt; Intersection of Multiple Arrays // Method 1 class Solution { public: vector&lt;int&gt; intersection(vector&lt;vector&lt;int&gt;&gt;&amp; nums) { int check[1001] = {0}; for(auto num : nums) { for(auto i : num) { check[i]++; } } vector&lt;int&gt; ans; for(int i = 0; i != 1001; i++) { if(check[i] == nums.size()) ans.push_back(i); }...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2248-Intersection-of-Multiple-Arrays/",
        "teaser": null
      },{
        "title": "Count Prefixes of a Given String",
        "excerpt":"&lt;-E 2255&gt; Count Prefixes of a Given String // Method 1 class Solution { public: int countPrefixes(vector&lt;string&gt;&amp; words, string s) { int ans = 0; for(auto word : words) { int i = 0; bool check = true; for(auto c : word) { if(check == true) { if(s[i++] != c)...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2255-Count-Prefixes-of-a-Given-String/",
        "teaser": null
      },{
        "title": "Remove Digit From Number to Maximize Result",
        "excerpt":"&lt;-E 2259&gt; Remove Digit From Number to Maximize Result // Method 1 class Solution { public: string removeDigit(string number, char digit) { vector&lt;string&gt; v; for(int i = 0; i &lt; number.size(); i++) { string s = number; if(number[i] == digit) { s.erase(i,1); v.push_back(s); } } return *max_element(v.begin(), v.end()); } };...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2259-Remove-Digit-From-Number-to-Maximize-Result/",
        "teaser": null
      },{
        "title": "Largest 3-Same-Digit Number in String",
        "excerpt":"&lt;-E 2264&gt; Largest 3-Same-Digit Number in String   class Solution { public:     string largestGoodInteger(string num) {         string ans;         for(int i=0;i&lt;num.size()-2;i++)             if(num[i] == num[i+1] &amp;&amp; num[i+1] == num[i+2])                 ans = max(ans, num.substr(i,3));         return ans;     } };  ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2264-Largest-3-Same-Digit-Number-in-String/",
        "teaser": null
      },{
        "title": "Find the K-Beauty of a Number",
        "excerpt":"&lt;-E 2269&gt; Find the K-Beauty of a Number   class Solution { public:     int divisorSubstrings(int num, int k) {         string strAns = to_string(num);         int n = strAns.size(),ans=0;         for (int i = 0; i &lt; (n-k+1); i++){             if(stoi(strAns.substr(i, k)) != 0)                 if(!(num % stoi(strAns.substr(i, k))))                     ans++;         }         return ans;     } };  ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2269.-Find-the-K-Beauty-of-a-Number/",
        "teaser": null
      },{
        "title": "Find Resultant Array After Removing Anagrams",
        "excerpt":"&lt;-E 2273&gt; Find Resultant Array After Removing Anagrams // Method 1 class Solution { public: vector&lt;string&gt; removeAnagrams(vector&lt;string&gt;&amp; words) { set&lt;string&gt; ans_temp; vector&lt;string&gt; ans; for(auto word : words) { int n = ans_temp.size(); string temp = word; sort(temp.begin(), temp.end()); ans_temp.insert(temp); if(ans_temp.size() &gt; 1) { ans_temp.clear(); ans_temp.insert(temp); ans.push_back(word); } if(ans_temp.size() != n)...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2273-Find-Resultant-Array-After-Removing-Anagrams/",
        "teaser": null
      },{
        "title": "Percentage of Letter in String",
        "excerpt":"&lt;-E 2278&gt; Percentage of Letter in String   class Solution { public:     int percentageLetter(string s, char letter) {         int n = s.size(); \t\tint c = 0; \t\tfor(auto i : s){ \t\t\tif(i == letter) \t\t\t\tc++; \t\t} \t\treturn c * 100 / n;     } };  ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2278-Percentage-of-Letter-in-String/",
        "teaser": null
      },{
        "title": "Check if Number Has Equal Digit Count and Digit Value",
        "excerpt":"&lt;-E 2283&gt; Check if Number Has Equal Digit Count and Digit Value class Solution { public: bool digitCount(string num) { int check[10] = {0}; for(auto i : num) { check[i - '0']++; } for(int i = 0; i != num.size(); i++) { if(check[i] != (num[i] - '0')) return false; }...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2283-Check-if-Number-Has-Equal-Digit-Count-and-Digit-Value/",
        "teaser": null
      },{
        "title": "Rearrange Characters to Make Target String",
        "excerpt":"&lt;-E 2287&gt; Rearrange Characters to Make Target String // Method 1 class Solution { public: int rearrangeCharacters(string s, string target) { int check_1[26] = {0}; int check_2[26] = {0}; for(auto c : s) { check_1[c - 'a']++; } for(auto c : target) { check_2[c - 'a']++; } int ans =...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2287-Rearrange-Characters-to-Make-Target-String/",
        "teaser": null
      },{
        "title": "Min Max Game",
        "excerpt":"&lt;-E 2293&gt; Min Max Game // Method 1 class Solution { public: int minMaxGame(vector&lt;int&gt;&amp; nums) { while(nums.size() &gt; 1){ vector&lt;int&gt; temp; bool m = false; for(int i = 1; i &lt; nums.size(); i += 2) { int n; m ? n = max(nums[i], nums[i - 1]) : n = min(nums[i],...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2293-Min-Max-Game/",
        "teaser": null
      },{
        "title": "Strong Password Checker II",
        "excerpt":"&lt;-E 2299&gt; Strong Password Checker II class Solution { public: bool strongPasswordCheckerII(string password) { int lowercase=0; int uppercase =0; int digit=0; int character=0; if(password.size()&lt;8) return false; for(int i = 0; i &lt; password.size(); i++) { if(i &gt; 0) { if(password[i-1]==password[i]) return false; } if(isupper(password[i])) uppercase++; else if(islower(password[i])) lowercase++; else if(isdigit(password[i]))...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2299-Strong-Password-Checker-II/",
        "teaser": null
      },{
        "title": "Calculate Amount Paid in Taxes",
        "excerpt":"&lt;-E 2303&gt; Calculate Amount Paid in Taxes class Solution { public: double calculateTax(vector&lt;vector&lt;int&gt;&gt;&amp; brackets, int income) { double ans = 0; int j = 0; for (auto v : brackets) { int upper = v[0], prcnt = v[1]; int curr = min(income, upper - j); ans += prcnt * 0.01...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2303-Calculate-Amount-Paid-in-Taxes/",
        "teaser": null
      },{
        "title": "Greatest English Letter in Upper and Lower Case",
        "excerpt":"&lt;-E 2309&gt; Greatest English Letter in Upper and Lower Case class Solution { public: string greatestLetter(string s) { int check_u[26] = {0}; int check_l[26] = {0}; for(auto c : s) { if(isupper(c)) { check_u[c - 'A']++; } else { check_l[c - 'a']++; } } string ans = \"\"; for(int i...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2309-Greatest-English-Letter-in-Upper-and-Lower-Case/",
        "teaser": null
      },{
        "title": "Count Asterisks",
        "excerpt":"&lt;-E 2315&gt; Count Asterisks // Method 1 class Solution { public: int countAsterisks(string s) { if(s.size() == 0) return 0; int cnt = 0; int bar = 0; for(int i = 0; i != s.size(); i++) { if(s[i]=='|') bar++; if(bar % 2 == 0 &amp;&amp; s[i]=='*') cnt++; } return cnt;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2315-Count-Asterisks/",
        "teaser": null
      },{
        "title": "Check if Matrix Is X-Matrix",
        "excerpt":"&lt;-E 2319&gt; Check if Matrix Is X-Matrix class Solution { public: bool checkXMatrix(vector&lt;vector&lt;int&gt;&gt;&amp; grid) { int n = grid.size(); for(int i = 0; i &lt; n; i++) { for(int j = 0; j &lt; n; j++) { if((i == j) || (i + j) == (n - 1)) { if(grid[i][j]...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/2319-Check-if-Matrix-Is-X-Matrix/",
        "teaser": null
      },{
        "title": "Find a Corresponding Node of a Binary Tree in a Clone of That Tree",
        "excerpt":"&lt;-E 1379&gt; Find a Corresponding Node of a Binary Tree in a Clone of That Tree /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode(int x) : val(x), left(NULL), right(NULL) {} * }; */ class Solution...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1379-Find-a-Corresponding-Node-of-a-Binary-Tree-in-a-Clone-of-That-Tree/",
        "teaser": null
      },{
        "title": "Largest Odd Number in String",
        "excerpt":"&lt;-E 1903&gt; Largest Odd Number in String   class Solution { public:     string largestOddNumber(string num) {         int i = num.size();         for(;i &gt;= 0; i--)             if((num[i] - '0') % 2 != 0)                 break;         return num.substr(0, i+1);     } };  ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1903-Largest-Odd-Number-in-String/",
        "teaser": null
      },{
        "title": "HTML and CSS",
        "excerpt":"HTML and CSS This a note of studying HTML and CSS Warming .example .pp = E F 是后代选择器。 .example.pp2 则是在一个元素上，这个元素包括这两个类才会有效果。 do not repeat id in the same page The basic of HTML Elements surrounded in angle brackets Usually have a start &amp; end tag Some tags closse themselves(Remnant of XHTML)...","categories": ["中文笔记"],
        "tags": ["HTML","CSS"],
        "url": "/%E4%B8%AD%E6%96%87%E7%AC%94%E8%AE%B0/HTML-and-CSS/",
        "teaser": null
      },{
        "title": "XT4",
        "excerpt":"XT4 光圈 在镜头上 右边 快门设置 左边 iso 设置 左边 下面： 模式拨盘：s 单张拍摄模式 cl 低速连拍 ch 高速连拍 bkt 包围曝光模式（有6种模式） adv 高级模式（滤镜） （胶片模拟只能在s，cl， ch 里用，右下按钮左键） af 是 开启自动对焦 ael 自动曝光 正面 右下 m 手动对焦 c 连续自动对焦 s 单词自动对焦 曝光模式 P 挡 光圈（镜头上的） a 右面 （快门） a A 挡 （光圈优先） 光圈（镜头上的）不是 a 右面...","categories": ["中文笔记"],
        "tags": ["XT4"],
        "url": "/%E4%B8%AD%E6%96%87%E7%AC%94%E8%AE%B0/XT4/",
        "teaser": null
      },{
        "title": "JavaScript",
        "excerpt":"JavaScript This a note of studying HTML and CSS Warming var 声明是全局作用域或函数作用域， let 和 const 是块作用域。 var 变量可以在其范围内更新和重新声明； let 变量可以被更新但不能重新声明； const 变量既不能更新也不能重新声明。 它们都被提升到其作用域的顶端。 99.99% 是const 0.01% 是let The basic of JS == equality 等同，=== identity 恒等。 ==， 两边值类型不同的时候，要先进行类型转换，再比较。 ==，不做类型转换，类型不同的一定不等。 下面分别说明： 先说 ===，这个比较简单。下面的规则用来判断两个值是否===相等： 如果类型不同，就[不相等] 如果两个都是数值，并且是同一个值，那么[相等]；(！例外)的是，如果其中至少一个是 NaN，那么[不相等]。（判断一个值是否是 NaN，只能用 isNaN()来判断） 如果两个都是字符串，每个位置的字符都一样，那么[相等]；否则[不相等]。 如果两个值都是 true，或者都是...","categories": ["中文笔记"],
        "tags": ["JS"],
        "url": "/%E4%B8%AD%E6%96%87%E7%AC%94%E8%AE%B0/JavaScript/",
        "teaser": null
      },{
        "title": "Regular Expression Matching",
        "excerpt":"&lt;-H 10&gt; Regular Expression Matching // Method 1 class Solution { public: bool isMatch(string s, string p) { char char_s[s.size() + 1]; char char_p[p.size() + 1]; strcpy(char_s, s.c_str()); strcpy(char_p, p.c_str()); return isMatch(char_s, char_p); } private: bool isMatch(const char *s, const char *p) { if(*p == '\\0') return *s == '\\0';...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/10-Regular-Expression-Matching/",
        "teaser": null
      },{
        "title": "Construct Binary Search Tree from Preorder Traversal",
        "excerpt":"&lt;-M 1008&gt; Construct Binary Search Tree from Preorder Traversal class Solution { public: TreeNode* bstFromPreorder(vector&lt;int&gt;&amp; preorder) { int i=0; return treeHelp(preorder, i, LONG_MAX); } TreeNode* treeHelp(vector&lt;int&gt; &amp;preorder, int &amp;i, long maxVal) { if(i == preorder.size() || preorder[i] &gt; maxVal) return NULL; TreeNode *n = new TreeNode(preorder[i++]); n-&gt;left = treeHelp(preorder, i,...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/1008-Construct-Binary-Search-Tree-from-Preorder-Traversal/",
        "teaser": null
      },{
        "title": "Binary Tree Level Order Traversal",
        "excerpt":"&lt;-M 102&gt; Binary Tree Level Order Traversal /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode *left, TreeNode *right)...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/102-Binary-Tree-Level-Order-Traversal/",
        "teaser": null
      },{
        "title": "Construct Binary Tree from Preorder and Inorder Traversal",
        "excerpt":"&lt;-M 105&gt; Construct Binary Tree from Preorder and Inorder Traversal /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/105-Construct-Binary-Tree-from-Preorder-and-Inorder-Traversal/",
        "teaser": null
      },{
        "title": "Convert Sorted List to Binary Search Tree",
        "excerpt":"&lt;-M 109&gt; Convert Sorted List to Binary Search Tree /** * Definition for singly-linked list. * struct ListNode { * int val; * ListNode *next; * ListNode() : val(0), next(nullptr) {} * ListNode(int x) : val(x), next(nullptr) {} * ListNode(int x, ListNode *next) : val(x), next(next) {} * }; */...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/109-Convert-Sorted-List-to-Binary-Search-Tree/",
        "teaser": null
      },{
        "title": "Combination Sum",
        "excerpt":"&lt;-M 39&gt; Combination Sum // Method 1 class Solution { public: vector&lt;vector&lt;int&gt;&gt; ans; void solve(int i, vector&lt;int&gt;&amp; arr, vector&lt;int&gt;&amp; temp, int target) { if(target == 0) { ans.push_back(temp); return; } if(target &lt; 0) return; if(i == arr.size()) return; solve(i + 1, arr, temp, target); temp.push_back(arr[i]); solve(i, arr, temp, target -...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/11-39-Combination-Sum/",
        "teaser": null
      },{
        "title": "Container With Most Water",
        "excerpt":"&lt;-M 11&gt; Container With Most Water class Solution { public: int maxArea(vector&lt;int&gt;&amp; height) { int l = 0, r = height.size() - 1; int ans = 0; while(l &lt; r) { ans = max(ans, (r - l) * min(height[l], height[r])); if(height[l] &lt; height[r]) l++; else r--; } return ans; }...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/11-Container-With-Most-Water/",
        "teaser": null
      },{
        "title": "Path Sum II",
        "excerpt":"&lt;-M 113&gt; Path Sum II /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode *left, TreeNode *right) : val(x),...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/113-Path-Sum-II/",
        "teaser": null
      },{
        "title": "Flatten Binary Tree to Linked List",
        "excerpt":"&lt;-M 114&gt; Flatten Binary Tree to Linked List /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode *left, TreeNode...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/114-Flatten-Binary-Tree-to-Linked-List/",
        "teaser": null
      },{
        "title": "Populating Next Right Pointers in Each Node",
        "excerpt":"&lt;-M 116&gt; Populating Next Right Pointers in Each Node /* // Definition for a Node. class Node { public: int val; Node* left; Node* right; Node* next; Node() : val(0), left(NULL), right(NULL), next(NULL) {} Node(int _val) : val(_val), left(NULL), right(NULL), next(NULL) {} Node(int _val, Node* _left, Node* _right, Node* _next)...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/116-Populating-Next-Right-Pointers-in-Each-Node/",
        "teaser": null
      },{
        "title": "Populating Next Right Pointers in Each Node II",
        "excerpt":"&lt;-M 117&gt; Populating Next Right Pointers in Each Node II /* // Definition for a Node. class Node { public: int val; Node* left; Node* right; Node* next; Node() : val(0), left(NULL), right(NULL), next(NULL) {} Node(int _val) : val(_val), left(NULL), right(NULL), next(NULL) {} Node(int _val, Node* _left, Node* _right, Node*...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/117-Populating-Next-Right-Pointers-in-Each-Node-II/",
        "teaser": null
      },{
        "title": "Triangle",
        "excerpt":"&lt;-M 120&gt; Triangle   class Solution { public:     int minimumTotal(vector&lt;vector&lt;int&gt;&gt;&amp; triangle) {         for(int i = triangle.size() - 2; i &gt;= 0; i--)             for(int j = 0; j &lt; i + 1; j++)                 triangle[i][j] += min(triangle[i + 1][j], triangle[i + 1][j + 1]);         return triangle[0][0];     } };  ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/120-Triangle/",
        "teaser": null
      },{
        "title": "Best Time to Buy and Sell Stock III",
        "excerpt":"&lt;-H 123&gt; Best Time to Buy and Sell Stock III class Solution { public: int maxProfit(vector&lt;int&gt;&amp; prices) { if(prices.size() &lt; 2) return 0; const int n = prices.size(); vector&lt;int&gt; f(n, 0); vector&lt;int&gt; g(n, 0); for(int i = 1, val = prices[0]; i &lt; n; i++) { val = min(val, prices[i]);...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/123-Best-Time-to-Buy-and-Sell-Stock-III/",
        "teaser": null
      },{
        "title": "Binary Tree Maximum Path Sum",
        "excerpt":"&lt;-H 124&gt; Binary Tree Maximum Path Sum /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode *left, TreeNode *right)...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/124-Binary-Tree-Maximum-Path-Sum/",
        "teaser": null
      },{
        "title": "Word Ladder II",
        "excerpt":"&lt;-H 126&gt; Word Ladder II class Solution { public: vector&lt;string&gt; g_words(string a, unordered_map&lt;string,int&gt; &amp;m){ vector&lt;string&gt; ans; for(int i = 0; i &lt; a.size(); i++) { string temp = a; for(char j = 'a';j &lt;= 'z'; j++) { temp[i] = j; if(temp == a) continue; if(m.find(temp) != m.end()) ans.push_back(temp); } }...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/126-Word-Ladder-II/",
        "teaser": null
      },{
        "title": "Word Ladder",
        "excerpt":"&lt;-H 127&gt; Word Ladder // Method 1 class Solution { public: int ladderLength(string beginWord, string endWord, vector&lt;string&gt;&amp; wordList) { int flag = 0; for(auto &amp;it : wordList) { if(endWord == it) { flag = 1; break; } } if(!flag) return 0; map&lt;string,vector&lt;string&gt;&gt; m; wordList.push_back(beginWord); for(int i = 0; i &lt;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/127-Word-Ladder/",
        "teaser": null
      },{
        "title": "Longest Consecutive Sequence",
        "excerpt":"&lt;-M 128&gt; Longest Consecutive Sequence // Method 1 class Solution { public: int longestConsecutive(vector&lt;int&gt;&amp; nums) { int len = nums.size(); if(len &lt; 1) return 0; set&lt;int&gt; data; for(auto n: nums) { data.insert(n); } bool isFirst = true; int prev, count = 0; int res = 1; for(int num : data)...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/128-Longest-Consecutive-Sequence/",
        "teaser": null
      },{
        "title": "Sum Root to Leaf Numbers",
        "excerpt":"&lt;-M 129&gt; Sum Root to Leaf Numbers /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode *left, TreeNode *right)...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/129-Sum-Root-to-Leaf-Numbers/",
        "teaser": null
      },{
        "title": "Palindrome Partitioning",
        "excerpt":"&lt;-M 131&gt; Palindrome Partitioning // Method 1 class Solution { public: vector&lt;vector&lt;string&gt;&gt; partition(string s) { const int n = s.size(); bool p[n][n]; fill_n(&amp;p[0][0], n * n, false); for(int i = n - 1; i &gt;= 0; i--) for(int j = i; j &lt; n; j++) p[i][j] = s[i] == s[j]...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/131-Palindrome-Partitioning/",
        "teaser": null
      },{
        "title": "Palindrome Partitioning II",
        "excerpt":"&lt;-H 132&gt; Palindrome Partitioning II class Solution { public: int minCut(string s) { const int n = s.size(); int f[n + 1]; bool p[n][n]; fill_n(&amp;p[0][0], n * n, false); for(int i = 0; i &lt;= n; i++) f[i] = n - 1 - i; for(int i = n - 1;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/132-Palindrome-Partitioning-II/",
        "teaser": null
      },{
        "title": "Gas Station",
        "excerpt":"&lt;-M 134&gt; Gas Station class Solution { public: int canCompleteCircuit(vector&lt;int&gt;&amp; gas, vector&lt;int&gt;&amp; cost) { int total = 0; int check = -1; for(int i = 0, sum = 0; i != gas.size(); i++) { sum += gas[i] - cost[i]; total += gas[i] - cost[i]; if(sum &lt; 0) { check =...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/134-Gas-Station/",
        "teaser": null
      },{
        "title": "Candy",
        "excerpt":"&lt;-H 135&gt; Candy class Solution { public: int candy(vector&lt;int&gt;&amp; ratings) { const int n = ratings.size(); vector&lt;int&gt; candys(n); for(int i = 1, increased_candy = 1; i != n; i++) if(ratings[i] &gt; ratings[i - 1]) candys[i] = max(increased_candy++, candys[i]); else increased_candy = 1; for(int i = n - 2, increased_candy =...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/135-Candy/",
        "teaser": null
      },{
        "title": "Single Number II",
        "excerpt":"&lt;-M 137&gt; Single Number II // Method 1 class Solution { public: int singleNumber(vector&lt;int&gt;&amp; nums) { int one = 0; int two = 0; int three = 0; for(int i = 0; i != nums.size(); i++) { two |= (one &amp; nums[i]); one ^= nums[i]; three = ~(one &amp; two);...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/137-Single-Number-II/",
        "teaser": null
      },{
        "title": "Copy List with Random Pointer",
        "excerpt":"&lt;-M 138&gt; Copy List with Random Pointer /* // Definition for a Node. class Node { public: int val; Node* next; Node* random; Node(int _val) { val = _val; next = NULL; random = NULL; } }; */ class Solution { public: Node* copyRandomList(Node* head) { for(Node *cur = head;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/138-Copy-List-with-Random-Pointer/",
        "teaser": null
      },{
        "title": "Linked List Cycle II",
        "excerpt":"&lt;-M 142&gt; Linked List Cycle II /** * Definition for singly-linked list. * struct ListNode { * int val; * ListNode *next; * ListNode(int x) : val(x), next(NULL) {} * }; */ class Solution { public: ListNode *detectCycle(ListNode *head) { ListNode *slow = head, *fast = head; while(fast &amp;&amp; fast-&gt;next)...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/142-Linked-List-Cycle-II/",
        "teaser": null
      },{
        "title": "Reorder List",
        "excerpt":"&lt;-M 143&gt; Reorder List /** * Definition for singly-linked list. * struct ListNode { * int val; * ListNode *next; * ListNode() : val(0), next(nullptr) {} * ListNode(int x) : val(x), next(nullptr) {} * ListNode(int x, ListNode *next) : val(x), next(next) {} * }; */ class Solution { public: void...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/143-Reorder-List/",
        "teaser": null
      },{
        "title": "LRU Cache",
        "excerpt":"&lt;-M 146&gt; LRU Cache class LRUCache { private: struct CacheNode { int key; int value; CacheNode(int k, int v) : key(k), value(v) {} }; list&lt;CacheNode&gt; cacheList; unordered_map&lt;int, list&lt;CacheNode&gt;::iterator&gt; cacheMap; int capacity; public: LRUCache(int capacity) { this-&gt;capacity = capacity; } int get(int key) { if(cacheMap.find(key) == cacheMap.end()) return -1; cacheList.splice(cacheList.begin(), cacheList,...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/146-LRU-Cache/",
        "teaser": null
      },{
        "title": "Sort List",
        "excerpt":"&lt;-M 148&gt; Sort List /** * Definition for singly-linked list. * struct ListNode { * int val; * ListNode *next; * ListNode() : val(0), next(nullptr) {} * ListNode(int x) : val(x), next(nullptr) {} * ListNode(int x, ListNode *next) : val(x), next(next) {} * }; */ class Solution { public: ListNode*...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/148-Sort-List/",
        "teaser": null
      },{
        "title": "Evaluate Reverse Polish Notation",
        "excerpt":"&lt;-M 150&gt; Evaluate Reverse Polish Notation class Solution { public: int evalRPN(vector&lt;string&gt;&amp; tokens) { int n = tokens.size(), first, sec, third; stack&lt;int&gt; stk; for(int i = 0; i &lt; n; i++) { if(tokens[i] == \"+\" || tokens[i] == \"-\" || tokens[i] == \"*\" || tokens[i] == \"/\" ) { sec...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/150-Evaluate-Reverse-Polish-Notation/",
        "teaser": null
      },{
        "title": "3Sum Closest",
        "excerpt":"&lt;-M 16&gt; 3Sum Closest class Solution { public: int threeSumClosest(vector&lt;int&gt;&amp; nums, int target) { sort(nums.begin(), nums.end()); int n = nums.size(); int ans = INT_MAX, min_diff = INT_MAX; for (int i = 0; i &lt; n; i++) { int target_temp = target - nums[i]; int j = i + 1, k...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/16-3Sum-Closest/",
        "teaser": null
      },{
        "title": "Letter Combinations of a Phone Number",
        "excerpt":"&lt;-M 17&gt; Letter Combinations of a Phone Number class Solution { public: void getLetterCombinations(string digits, string c, vector&lt;string&gt;&amp; pad, vector&lt;string&gt;&amp; res) { for(auto i : pad[digits[0] - '0']) { string c2 = c + i; string digits2 = digits; digits2.erase(0, 1); if(!digits2.size()) res.push_back(c2); else getLetterCombinations(digits2, c2, pad, res); } }...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/17-Letter-Combinations-of-a-Phone-Number/",
        "teaser": null
      },{
        "title": "4Sum",
        "excerpt":"&lt;-M 18&gt; 4Sum // Method 1 class Solution { public: vector&lt;vector&lt;int&gt;&gt; fourSum(vector&lt;int&gt;&amp; nums, int target) { set&lt;vector&lt;int&gt;&gt;myList; sort(nums.begin(), nums.end()); if(nums.size() &lt; 4){ return vector&lt;vector&lt;int&gt;&gt;(); } for(int i = 0; i &lt; nums.size(); i++){ for(int j = i + 1; j &lt; nums.size(); j++){ int x = j + 1, y...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/18-4Sum/",
        "teaser": null
      },{
        "title": "Remove Nth Node From End of List",
        "excerpt":"&lt;-M 19&gt; Remove Nth Node From End of List /** * Definition for singly-linked list. * struct ListNode { * int val; * ListNode *next; * ListNode() : val(0), next(nullptr) {} * ListNode(int x) : val(x), next(nullptr) {} * ListNode(int x, ListNode *next) : val(x), next(next) {} * }; */...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/19-Remove-Nth-Node-From-End-of-List/",
        "teaser": null
      },{
        "title": "Generate Parentheses",
        "excerpt":"&lt;-M 22&gt; Generate Parentheses // Method 1 class Solution { public: vector&lt;string&gt; generateParenthesis(int n) { if(n == 0) return vector&lt;string&gt;(1, \"\"); if(n == 1) return vector&lt;string&gt;(1, \"()\"); vector&lt;string&gt; result; for(int i = 0; i &lt; n; i++) for(auto inner : generateParenthesis(i)) for(auto outer : generateParenthesis(n - 1 - i)) result.push_back(\"(\"...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/22-Generate-Parentheses/",
        "teaser": null
      },{
        "title": "Merge k Sorted Lists",
        "excerpt":"&lt;-M 23&gt; Merge k Sorted Lists /** * Definition for singly-linked list. * struct ListNode { * int val; * ListNode *next; * ListNode() : val(0), next(nullptr) {} * ListNode(int x) : val(x), next(nullptr) {} * ListNode(int x, ListNode *next) : val(x), next(next) {} * }; */ // Method 1...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/23-Merge-k-Sorted-Lists/",
        "teaser": null
      },{
        "title": "Swap Nodes in Pairs",
        "excerpt":"&lt;-M 24&gt; Swap Nodes in Pairs /** * Definition for singly-linked list. * struct ListNode { * int val; * ListNode *next; * ListNode() : val(0), next(nullptr) {} * ListNode(int x) : val(x), next(nullptr) {} * ListNode(int x, ListNode *next) : val(x), next(next) {} * }; */ class Solution {...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/24-Swap-Nodes-in-Pairs/",
        "teaser": null
      },{
        "title": "Reverse Nodes in k-Group",
        "excerpt":"&lt;-H 25&gt; Reverse Nodes in k-Group /** * Definition for singly-linked list. * struct ListNode { * int val; * ListNode *next; * ListNode() : val(0), next(nullptr) {} * ListNode(int x) : val(x), next(nullptr) {} * ListNode(int x, ListNode *next) : val(x), next(next) {} * }; */ // Method 1...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/25-Reverse-Nodes-in-k-Group/",
        "teaser": null
      },{
        "title": "Next Permutation",
        "excerpt":"&lt;-M 31&gt; Next Permutation // Method 1 class Solution { public: void nextPermutation(vector&lt;int&gt;&amp; nums) { int n = nums.size(), k, l; for (k = n - 2; k &gt;= 0; k--) { if (nums[k] &lt; nums[k + 1]) { break; } } if (k &lt; 0) { reverse(nums.begin(), nums.end()); }...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/31-Next-Permutation/",
        "teaser": null
      },{
        "title": "Longest Valid Parentheses",
        "excerpt":"&lt;-H 32&gt; Longest Valid Parentheses class Solution { public: int longestValidParentheses(string s) { int n = s.length(); stack&lt;int&gt; st; st.push(-1); int maxans = 0; for(int i = 0; i &lt; n; i++) { if(s[i] == '(') st.push(i); else { st.pop(); if(st.empty()) st.push(i); else maxans = max(maxans, i - st.top()); }...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/32-Longest-Valid-Parentheses/",
        "teaser": null
      },{
        "title": "Search in Rotated Sorted Array",
        "excerpt":"&lt;-M 33&gt; Search in Rotated Sorted Array class Solution { public: int search(vector&lt;int&gt;&amp; nums, int target) { int first = 0, last = nums.size(); while (first != last) { const int mid = first + (last - first) / 2; if (nums[mid] == target) return mid; if (nums[first] &lt;= nums[mid])...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/33-Search-in-Rotated-Sorted-Array/",
        "teaser": null
      },{
        "title": "Valid Sudoku",
        "excerpt":"&lt;-M 36&gt; Valid Sudoku // Method 1 class Solution { public: bool used[9]; bool isValidSudoku(vector&lt;vector&lt;char&gt;&gt;&amp; board) { for(int i = 0; i &lt; 9; i++) { fill(used, used + 9, false); for(int j = 0; j &lt; 9; j++) if(!check(board[i][j])) return false; fill(used, used + 9, false); for(int j =...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/36-Valid-Sudoku/",
        "teaser": null
      },{
        "title": "Sudoku Solver",
        "excerpt":"&lt;-H 37&gt; Sudoku Solver class Solution { public: void solveSudoku(vector&lt;vector&lt;char&gt;&gt;&amp; board) { solve_suduko(board); } bool solve_suduko(vector&lt;vector&lt;char&gt;&gt;&amp; board) { int n = board.size(); int m = board[0].size(); for(int i = 0;i &lt; n; i++) { for(int j = 0; j &lt; m; j++) { if(board[i][j] == '.') { for(char ch =...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/37-Sudoku-Solver/",
        "teaser": null
      },{
        "title": "Count and Say",
        "excerpt":"&lt;-M 38&gt; Count and Say // Method 1 class Solution { public: string countans(string curr, int on, int n) { if (on == n) return curr; int l = curr.length(); int count = 1; string retstr = \"\"; for (int i = 1; i &lt;= l; i++) { while (i...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/38-Count-and-Say/",
        "teaser": null
      },{
        "title": "Median of Two Sorted Arrays",
        "excerpt":"&lt;-H 4&gt; Median of Two Sorted Arrays // Method 1 class Solution { public: double findMedianSortedArrays(vector&lt;int&gt;&amp; A, vector&lt;int&gt;&amp; B) { int n = A.size(); int m = B.size(); if (n &gt; m) return findMedianSortedArrays(B, A); // Swapping to make A smaller int start = 0; int end = n; int...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/4-Median-of-Two-Sorted-Arrays/",
        "teaser": null
      },{
        "title": "Combination Sum II",
        "excerpt":"&lt;-M 40&gt; Combination Sum II // Method 1 class Solution { public: void recur(int ind, int tar, vector&lt;int&gt;&amp; c, vector&lt;vector&lt;int&gt;&gt;&amp; ans, vector&lt;int&gt;&amp; ds){ if(tar == 0){ ans.push_back(ds); return; } for(int i = ind; i &lt; c.size(); i++){ if(i &gt; ind &amp;&amp; c[i] == c[i - 1]) continue; if(c[i] &gt; tar)...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/40-Combination-Sum-II/",
        "teaser": null
      },{
        "title": "First Missing Positive",
        "excerpt":"&lt;-H 41&gt; First Missing Positive class Solution { public: int firstMissingPositive(vector&lt;int&gt;&amp; nums) { for(int i = 0; i != nums.size(); i++) { while(nums[i] != (i + 1)) { if (nums[i] &lt;= 0 || nums[i] &gt; nums.size() || nums[i] == nums[nums[i] - 1]) break; swap(nums[i], nums[nums[i] - 1]); } } for(int...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/41-First-Missing-Positive/",
        "teaser": null
      },{
        "title": "Trapping Rain Water",
        "excerpt":"&lt;-H 42&gt; Trapping Rain Water // Method 1 class Solution { public: int trap(vector&lt;int&gt;&amp; height) { int max = 0; for(int i = 0; i != height.size(); i++) { if(height[i] &gt; height[max]) max = i; } int water = 0; int diff = 0; for(int i = 0; i &lt;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/42-Trapping-Rain-Water/",
        "teaser": null
      },{
        "title": "Wildcard Matching",
        "excerpt":"&lt;-H 44&gt; Wildcard Matching // Method 1 class Solution { public: bool isMatch(string s, string p) { char char_s[s.size() + 1]; char char_p[p.size() + 1]; strcpy(char_s, s.c_str()); strcpy(char_p, p.c_str()); return isMatch(char_s, char_p); } private: bool isMatch(const char *s, const char *p) { bool star = false; const char *str, *ptr;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/44-Wildcard-Matching/",
        "teaser": null
      },{
        "title": "Jump Game II",
        "excerpt":"&lt;-M 45&gt; Jump Game II // Method 1 class Solution { public: int jump(vector&lt;int&gt;&amp; nums) { int n = nums.size(); int step = 0; int left = 0; int right = 0; if(n == 1) return 0; while(left &lt;= right) { step++; const int old_right = right; for(int i =...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/45-Jump-Game-II/",
        "teaser": null
      },{
        "title": "Permutations",
        "excerpt":"&lt;-M 46&gt; Permutations class Solution { public: vector&lt;vector&lt;int&gt;&gt; permute(vector&lt;int&gt;&amp; nums) { sort(nums.begin(), nums.end()); vector&lt;vector&lt;int&gt;&gt; result; vector&lt;int&gt; path; dfs(nums, path, result); return result; } private: void dfs(const vector&lt;int&gt;&amp; nums, vector&lt;int&gt; &amp;path, vector&lt;vector&lt;int&gt;&gt; &amp;result) { if(path.size() == nums.size()) { result.push_back(path); return; } for(auto i : nums) { auto pos = find(path.begin(), path.end(),...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/46-Permutations/",
        "teaser": null
      },{
        "title": "Permutations II",
        "excerpt":"&lt;-M 47&gt; Permutations II // Method 1 class Solution { private: void permute(vector&lt;int&gt;&amp; nums, vector&lt;vector&lt;int&gt;&gt;&amp;ans, int l) { int r = nums.size() - 1; unordered_set&lt;int&gt; s; if(l == r) { ans.push_back(nums); return; } else { for(int i = l; i &lt;= r; i++){ if(s.find(nums[i]) != s.end()) continue; else { s.insert(nums[i]);...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/47-Permutations-II/",
        "teaser": null
      },{
        "title": "Rotate Image",
        "excerpt":"&lt;-M 48&gt; Rotate Image class Solution { public: void rotate(vector&lt;vector&lt;int&gt;&gt;&amp; matrix) { for(int i = 0; i != matrix.size(); i++) for(int j = 0; j &lt; matrix.size() - i; j++) swap(matrix[i][j], matrix[matrix.size() - 1 - j][matrix.size() - 1 - i]); for(int i = 0; i != matrix.size() / 2; i++)...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/48-Rotate-Image/",
        "teaser": null
      },{
        "title": "Longest Palindromic Substring",
        "excerpt":"&lt;-M 5&gt; Longest Palindromic Substring class Solution { public: string longestPalindrome(string s) { if (s.empty()) return \"\"; if (s.size() == 1) return s; int min_start = 0, max_len = 1; for (int i = 0; i &lt; s.size();) { if (s.size() - i &lt;= max_len / 2) break; int j...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/5-Longest-Palindromic-Substring/",
        "teaser": null
      },{
        "title": "N-Queens",
        "excerpt":"&lt;-H 51&gt; N-Queens // Method 1 class Solution { public: vector&lt;vector&lt;string&gt;&gt; solveNQueens(int n) { this-&gt;columns = vector&lt;int&gt; (n, 0); this-&gt;main_diag = vector&lt;int&gt; (2 * n, 0); this-&gt;anti_diag = vector&lt;int&gt; (2 * n, 0); vector&lt;vector&lt;string&gt;&gt; result; vector&lt;int&gt; count(n, 0); dfs(count, result, 0); return result; } private: vector&lt;int&gt; columns; vector&lt;int&gt; main_diag; vector&lt;int&gt;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/51-N-Queens/",
        "teaser": null
      },{
        "title": "N-Queens II",
        "excerpt":"&lt;-H 52&gt; N-Queens II class Solution { private: vector&lt;int&gt; columns; vector&lt;int&gt; main_diag; vector&lt;int&gt; anti_diag; int ans_count; void dfs(vector&lt;int&gt; &amp;count, int row) { const int num = count.size(); if(row == num) { this-&gt;ans_count++; return; } for(int j = 0; j &lt; num; j++) { bool ok = columns[j] == 0 &amp;&amp;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/52-N-Queens-II/",
        "teaser": null
      },{
        "title": "Jump Game",
        "excerpt":"&lt;-M 55&gt; Jump Game class Solution { public: bool canJump(vector&lt;int&gt;&amp; nums) { int n = nums.size(); if(n == 0) return true; int left_most = n - 1; for(int i = n - 2; i &gt;= 0; i--) if(i + nums[i] &gt;= left_most) left_most = i; return left_most == 0; }...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/55-Jump-Game/",
        "teaser": null
      },{
        "title": "Permutation Sequence",
        "excerpt":"&lt;-M 60&gt; Permutation Sequence // Method 1 class Solution { public: string getPermutation(int n, int k) { string s(n, '0'); string ans; for(int i = 0; i &lt; n; i++) { s[i] += i + 1; } return kthPermutation(s, k); } private: int factorial(int n) { int result = 1;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/60-Permutation-Sequence/",
        "teaser": null
      },{
        "title": "Rotate List",
        "excerpt":"&lt;-M 61&gt; Rotate List /** * Definition for singly-linked list. * struct ListNode { * int val; * ListNode *next; * ListNode() : val(0), next(nullptr) {} * ListNode(int x) : val(x), next(nullptr) {} * ListNode(int x, ListNode *next) : val(x), next(next) {} * }; */ class Solution { public: ListNode*...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/61-Rotate-List/",
        "teaser": null
      },{
        "title": "Unique Paths",
        "excerpt":"&lt;-M 62&gt; Unique Paths   class Solution { public:     int uniquePaths(int m, int n) {         vector&lt;int&gt; f(n, 0);         f[0] = 1;         for(int i = 0; i &lt; m; i++)             for(int j = 1; j &lt; n; j++)                 f[j] = f[j - 1] + f[j];         return f[n - 1];     } };  ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/62-Unique-Paths/",
        "teaser": null
      },{
        "title": "Unique Paths II",
        "excerpt":"&lt;-M 63&gt; Unique Paths II class Solution { public: int uniquePathsWithObstacles(vector&lt;vector&lt;int&gt;&gt;&amp; obstacleGrid) { const int m = obstacleGrid.size(); const int n = obstacleGrid.front().size(); if(obstacleGrid[0][0] || obstacleGrid[m - 1][n - 1]) return 0; vector&lt;int&gt; f(n, 0); f[0] = obstacleGrid[0][0] ? 0 : 1; for(int i = 0; i &lt; m; i++)...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/63-Unique-Paths-II/",
        "teaser": null
      },{
        "title": "Minimum Path Sum",
        "excerpt":"&lt;-M 64&gt; Minimum Path Sum class Solution { public: int minPathSum(vector&lt;vector&lt;int&gt;&gt;&amp; grid) { const int m = grid.size(); const int n = grid[0].size(); int f[n]; fill(f, f + n, INT_MAX); f[0] = 0; for(int i = 0; i &lt; m; i++) { f[0] += grid[i][0]; for(int j = 1; j...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/64-Minimum-Path-Sum/",
        "teaser": null
      },{
        "title": "Valid Number",
        "excerpt":"&lt;-H 65&gt; Valid Number // Method 1 class Solution { private: enum InputType { INVALID, // 0 SPACE, // 1 SIGN, // 2 DIGIT, // 3 DOT, // 4 EXPONENT, // 5 NUM_INPUTS// 6 }; public: bool isNumber(string s) { const int transitionTable[][NUM_INPUTS] = { -1, 0, 3, 1, 2,...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/65-Valid-Number/",
        "teaser": null
      },{
        "title": "Simplify Path",
        "excerpt":"&lt;-M 71&gt; Simplify Path // Method 1 class Solution { public: string simplifyPath(string path) { vector&lt;string&gt; dirs; for(auto i = path.begin(); i != path.end();) { ++i; auto j = find(i, path.end(), '/'); auto dir = string(i, j); if(!dir.empty() &amp;&amp; dir != \".\") { if(dir == \"..\") { if(!dirs.empty()) dirs.pop_back(); }...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/71-Simplify-Path/",
        "teaser": null
      },{
        "title": "Set Matrix Zeroes",
        "excerpt":"&lt;-M 73&gt; Set Matrix Zeroes class Solution { public: void setZeroes(vector&lt;vector&lt;int&gt;&gt;&amp; matrix) { const int m = matrix.size(); const int n = matrix[0].size(); vector&lt;int&gt; row(m, false); vector&lt;int&gt; col(n, false); for(int i = 0; i != m; i++) for(int j = 0; j != n; j++) if(matrix[i][j] == 0) row[i] =...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/73-Set-Matrix-Zeroes/",
        "teaser": null
      },{
        "title": "Search a 2D Matrix",
        "excerpt":"&lt;-M 74&gt; Search a 2D Matrix class Solution { public: bool searchMatrix(vector&lt;vector&lt;int&gt;&gt;&amp; matrix, int target) { if(matrix.size() == 0) return false; const int m = matrix.size(); const int n = matrix[0].size(); int first = 0; int last = m * n; while(first &lt; last) { int mid = first +...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/74-Search-a-2D-Matrix/",
        "teaser": null
      },{
        "title": "Sort Colors",
        "excerpt":"&lt;-M 75&gt; Sort Colors // Method 1 class Solution { public: void sortColors(vector&lt;int&gt;&amp; nums) { int red = 0, blue = nums.size() - 1; for (int i = 0; i &lt; blue + 1;) { switch(nums[i]) { case 0: swap(nums[i++], nums[red++]); break; default: i++; break; case 2: swap(nums[i], nums[blue--]); break;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/75-Sort-Colors/",
        "teaser": null
      },{
        "title": "Combinations",
        "excerpt":"&lt;-M 77&gt; Combinations class Solution { public: vector&lt;vector&lt;int&gt;&gt; combine(int n, int k) { vector&lt;int&gt; path; vector&lt;vector&lt;int&gt;&gt; result; dfs(n, k, 1, 0, path, result); return result; } private: void dfs(int n, int k, int start, int curr, vector&lt;int&gt;&amp; path, vector&lt;vector&lt;int&gt;&gt;&amp; result) { if(curr == k) result.push_back(path); for(int i = start; i...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/77-Combinations/",
        "teaser": null
      },{
        "title": "Subsets",
        "excerpt":"&lt;-M 78&gt; Subsets class Solution { public: void helper(vector&lt;int&gt;&amp; nums, int i, vector&lt;int&gt;&amp; subset, vector&lt;vector&lt;int&gt;&gt; &amp;ans) { if(i==nums.size()){ ans.push_back(subset); return; } subset.push_back(nums[i]); helper(nums, i + 1, subset, ans); subset.pop_back(); helper(nums, i + 1, subset, ans); } vector&lt;vector&lt;int&gt;&gt; subsets(vector&lt;int&gt;&amp; nums) { vector&lt;int&gt; x; vector&lt;vector&lt;int&gt;&gt; ans; helper(nums, 0, x, ans); return ans;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/78-Subsets/",
        "teaser": null
      },{
        "title": "Word Search",
        "excerpt":"&lt;-M 79&gt; Word Search // Method 1 class Solution { public: bool exist(vector&lt;vector&lt;char&gt;&gt;&amp; board, string word) { const int m = board.size(); const int n = board[0].size(); vector&lt;vector&lt;bool&gt;&gt; visited(m, vector&lt;bool&gt;(n, false)); for(int i = 0; i &lt; m; i++) for(int j = 0; j &lt; n; j++) if(dfs(board, word, 0,...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/79-Word-Search/",
        "teaser": null
      },{
        "title": "Remove Duplicates from Sorted Array II",
        "excerpt":"&lt;-M 80&gt; Remove Duplicates from Sorted Array II   class Solution { public:     int removeDuplicates(vector&lt;int&gt;&amp; nums) {         if(nums.size() &lt;= 2)             return nums.size();         int index = 2;         for(int i = 2; i &lt; nums.size(); i++) {             if(nums[i] != nums[index - 2])                 nums[index++] = nums[i];         }         return index;     } };  ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/80-Remove-Duplicates-from-Sorted-Array-II/",
        "teaser": null
      },{
        "title": "Search in Rotated Sorted Array II",
        "excerpt":"&lt;-M 81&gt; Search in Rotated Sorted Array II class Solution { public: bool search(vector&lt;int&gt;&amp; nums, int target) { int first = 0, last = nums.size(); while (first != last) { const int mid = first + (last - first) / 2; if (nums[mid] == target) return true; if (nums[first] &lt;...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/81-Search-in-Rotated-Sorted-Array-II/",
        "teaser": null
      },{
        "title": "Remove Duplicates from Sorted List II",
        "excerpt":"&lt;-M 82&gt; Remove Duplicates from Sorted List II /** * Definition for singly-linked list. * struct ListNode { * int val; * ListNode *next; * ListNode() : val(0), next(nullptr) {} * ListNode(int x) : val(x), next(nullptr) {} * ListNode(int x, ListNode *next) : val(x), next(next) {} * }; */ //...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/82-Remove-Duplicates-from-Sorted-List-II/",
        "teaser": null
      },{
        "title": "Largest Rectangle in Histogram",
        "excerpt":"&lt;-H 84&gt; Largest Rectangle in Histogram class Solution { public: int largestRectangleArea(vector&lt;int&gt;&amp; heights) { stack&lt;int&gt; s; heights.push_back(0); int result = 0; for(int i = 0; i != heights.size(); ) { if(s.empty() || heights[i] &gt; heights[s.top()]) s.push(i++); else { int temp = s.top(); s.pop(); result = max(result, heights[temp] * (s.empty() ?...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/84-Largest-Rectangle-in-Histogram/",
        "teaser": null
      },{
        "title": "Maximal Rectangle",
        "excerpt":"&lt;-H 85&gt; Maximal Rectangle class Solution { public: int maximalRectangle(vector&lt;vector&lt;char&gt;&gt;&amp; matrix) { if(matrix.empty()) return 0; const int m = matrix.size(); const int n = matrix[0].size(); vector&lt;int&gt; H(n, 0); vector&lt;int&gt; L(n, 0); vector&lt;int&gt; R(n, n); int ret = 0; for(int i = 0; i &lt; m; i++) { int left =...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/85-Maximal-Rectangle/",
        "teaser": null
      },{
        "title": "Partition List",
        "excerpt":"&lt;-M 86&gt; Partition List /** * Definition for singly-linked list. * struct ListNode { * int val; * ListNode *next; * ListNode() : val(0), next(nullptr) {} * ListNode(int x) : val(x), next(nullptr) {} * ListNode(int x, ListNode *next) : val(x), next(next) {} * }; */ // Method 1 class Solution...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/86-Partition-List/",
        "teaser": null
      },{
        "title": "Scramble String",
        "excerpt":"&lt;-H 87&gt; Scramble String // Method 1 class Solution { public: bool isScramble(string s1, string s2) { const int n = s1.size(); if(s1.size() != s2.size()) return false; bool f[n + 1][n][n]; fill_n(&amp;f[0][0][0], (n + 1) * n * n, false); for(int i = 0; i &lt; n; i++) for(int j...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/87-Scramble-String/",
        "teaser": null
      },{
        "title": "Construct Binary Tree from Preorder and Postorder Traversal",
        "excerpt":"&lt;-M 889&gt; Construct Binary Tree from Preorder and Postorder Traversal /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/889-Construct-Binary-Tree-from-Preorder-and-Postorder-Traversal/",
        "teaser": null
      },{
        "title": "Gray Code",
        "excerpt":"&lt;-M 89&gt; Gray Code // Method 1 class Solution { public: vector&lt;int&gt; grayCode(int n) { vector&lt;int&gt; ans; for(int i = 0; i &lt; (1 &lt;&lt; n); i++) ans.push_back(i ^ (i &gt;&gt; 1)); return ans; } }; // Method 2 class Solution { public: vector&lt;int&gt; grayCode(int n) { vector&lt;int&gt; prev; int...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/89-Gray-Code/",
        "teaser": null
      },{
        "title": "Subsets II",
        "excerpt":"&lt;-M 90&gt; Subsets II // Method 1 class Solution { public: vector&lt;vector&lt;int&gt;&gt; subsetsWithDup(vector&lt;int&gt;&amp; nums) { sort(nums.begin(), nums.end()); vector&lt;vector&lt;int&gt;&gt; result(1); int previous_size = 0; for(int i = 0; i &lt; nums.size(); i++) { int size = result.size(); for(int j = 0; j &lt; size; j++) { if(i == 0 || nums[i]...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/90-Subsets-II/",
        "teaser": null
      },{
        "title": "Reverse Linked List II",
        "excerpt":"&lt;-M 92&gt; Reverse Linked List II /** * Definition for singly-linked list. * struct ListNode { * int val; * ListNode *next; * ListNode() : val(0), next(nullptr) {} * ListNode(int x) : val(x), next(nullptr) {} * ListNode(int x, ListNode *next) : val(x), next(next) {} * }; */ class Solution {...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/92-Reverse-Linked-List-II/",
        "teaser": null
      },{
        "title": "Restore IP Addresses",
        "excerpt":"&lt;-M 93&gt; Restore IP Addresses // Method 1 class Solution { public: vector&lt;string&gt; restoreIpAddresses(string s) { vector&lt;string&gt; result; string ip; dfs(s,0, 0, ip, result); return result; } private: void dfs(string &amp;s, int start, int step, string ip, vector&lt;string&gt;&amp; result) { if(start == s.size() &amp;&amp; step == 4) { ip.resize(ip.size() -...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/93-Restore-IP-Addresses/",
        "teaser": null
      },{
        "title": "Unique Binary Search Trees II",
        "excerpt":"&lt;-M 95&gt; Unique Binary Search Trees II /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode *left, TreeNode *right)...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/95-Unique-Binary-Search-Trees-II/",
        "teaser": null
      },{
        "title": "Unique Binary Search Trees",
        "excerpt":"&lt;-M 96&gt; Unique Binary Search Trees class Solution { public: int numTrees(int n) { vector&lt;int&gt; check(n + 1, 0); check[0] = 1; check[1] = 1; for(int i = 2; i &lt;= n; i++) for(int k = 1; k &lt;= i; k++) check[i] += check[k - 1] * check[i - k];...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/96-Unique-Binary-Search-Trees/",
        "teaser": null
      },{
        "title": "Interleaving String",
        "excerpt":"&lt;-M 97&gt; Interleaving String class Solution { private: vector&lt;vector&lt;bool&gt;&gt; dp; vector&lt;vector&lt;bool&gt;&gt; vis; bool solve(int i, int j, string &amp;a, string &amp;b, string &amp;c) { if (i == 0 &amp;&amp; j == 0) return true; if (vis[i][j]) return dp[i][j]; vis[i][j] = true; if (i == 0) return dp[i][j] = b[j -...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/97-Interleaving-String/",
        "teaser": null
      },{
        "title": "Validate Binary Search Tree",
        "excerpt":"&lt;-M 98&gt; Validate Binary Search Tree /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode *left, TreeNode *right) :...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/98-Validate-Binary-Search-Tree/",
        "teaser": null
      },{
        "title": "Recover Binary Search Tree",
        "excerpt":"&lt;-M 99&gt; Recover Binary Search Tree /** * Definition for a binary tree node. * struct TreeNode { * int val; * TreeNode *left; * TreeNode *right; * TreeNode() : val(0), left(nullptr), right(nullptr) {} * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} * TreeNode(int x, TreeNode *left, TreeNode *right) :...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/99-Recover-Binary-Search-Tree/",
        "teaser": null
      },{
        "title": "Surrounded Regions",
        "excerpt":"&lt;-M 130&gt; Surrounded Regions // Method 1 class Solution { public: void solve(vector&lt;vector&lt;char&gt;&gt;&amp; board) { if(board.empty()) return; const int m = board.size(); const int n = board.front().size(); for(int i = 0; i &lt; n; i++) { bfs(board, 0, i); bfs(board, m - 1, i); } for(int i = 1; i...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/130-Surrounded-Regions/",
        "teaser": null
      },{
        "title": "Edit Distance",
        "excerpt":"&lt;-H 72&gt; Edit Distance class Solution { public: int minDistance(string word1, string word2) { const int n = word1.size(); const int m = word2.size(); int f[n + 1][m + 1]; for(int i = 0; i &lt;= n; i++) f[i][0] = i; for(int i = 0; i &lt;= m; i++) f[0][i]...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/72-Edit-Distance/",
        "teaser": null
      },{
        "title": "Distinct Subsequences",
        "excerpt":"&lt;-H 115&gt; Distinct Subsequences class Solution { public: int numDistinct(string s, string t) { vector&lt;unsigned long long&gt; f(t.size() + 1); f[0] = 1; for(int i = 0; i &lt; s.size(); i++) for(int j = t.size() - 1; j &gt;= 0; j--) f[j + 1] += s[i] == t[j] ? f[j]...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/115-Distinct-Subsequences/",
        "teaser": null
      },{
        "title": "Word Break",
        "excerpt":"&lt;-H 139&gt; Word Break   class Solution { public:     bool wordBreak(string s, vector&lt;string&gt;&amp; wordDict) {         vector&lt;bool&gt; res(s.size(),false);         res[0]=true;         for(int i=0;i&lt;s.size();i++){             if(res[i]){                 for(auto str:wordDict){                     if(s.substr(i, str.size()).compare(str)==0){                         res[i+str.size()]=true;                     }                 }             }         }         return res[s.size()];     } };  ","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/139-Word-Break/",
        "teaser": null
      },{
        "title": "Decode Ways",
        "excerpt":"&lt;-M 91&gt; Decode Ways class Solution { public: int numDecodings(string s) { if(s.empty() || s[0] == '0') return 0; int prev = 0; int cur = 1; for(int i = 1; i &lt;= s.size(); i++) { if(s[i - 1] == '0') cur = 0; if(i &lt; 2 || !(s[i -...","categories": [],
        "tags": ["C++","Leetcode","Algorithms"],
        "url": "/91-Decode-Ways/",
        "teaser": null
      }]
