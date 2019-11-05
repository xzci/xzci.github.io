---
title: 杂项
categories:
 - 中文笔记
tags:
- Others
---

# 总结

## 封装

主要的原因是为了编程简单，比如说，一段重复的操作，或者重复的结构，可以通过封装对程序进行简化处理，只需要在某次编写好相关的函数，或者类，通过调用或者继承，将大大减少开发的时间。同时在修改时，也会变得更为简单。（只需要修改一处，其余的部分都会随之更改。), 同时。如果有写有细微的改动，此时，可以使用各种语言提供的，比如虚函数，抽象函数，对相应的实现进行针对化的封装。

## Try-Catch

对程序要有相应的错误处理。需要有出错文件，出错行号（可选）， 出错函数，或者是确认用的信息。
确认需要是否需去自己实现相关的功能，相关的语言中是否有提供相应的类。 如果实现的话，有几个问题：

* 如何确定行号，（c语言可以简单实现，其他的好像比较复杂）
* 如何确定函数名，自动确定。（被包括的函数？程序的API？）
* 出错的源文件

正式上线的时候不需要清空log文件。

## 设计模式

相应的，先要去确认一下

* 错误如何处理，是否要留有记录，出错后应该如何操作。
* 这里是业务逻辑。
* 结束处理。确认结束后应该出现什么样子的提示，或者发送邮件。
* 用户体验。

class ->  方法 -> 变量 （注意各种变量的保护级别，相应的处理。）

学习：

Do the test-------------->get wrong or do not understand
      |                                 |
      |                                 |
      +read the book and get understand +

design and code---------->get wrong or do not understand
      |                                  |
    redesign                             |
      |                                  |
      + read the book and get understand +

设计的HR系统。
可以使用数据库和excel 对公司进行管理。首先设计一个完整的成品。然后在对具体的逻辑抽取形成框架。

具体要学习的，注册多个github账号，然后练习使用git的分支管理。
一开始使用操作excel 接口的C# 来制作。
然后抽成框架后，对该系统进行移植。以达到基础的编程练习。

所以要做到：

* 操作SQL （增删查改， 初始化新表）
* 操作excel （增删查改， 初始化新EXCEL)
* 练习多线程
* 设计简单的UI
* 发送邮件 （建立简单的邮件服务器。能够理解邮件协议）

其次，制作微信小程序。
学习制作。具体情况做情况讨论。

## 比较2个相同结构的datatable new 和 old，并从new中删除old的数据

我的主要思路如下：
使用.NET 提供的 Merge 方法。

1. 先将2个datatable设置主键。
2. 然后在New 中添加一个flag column，并设置默认值。
3. 使用Merge方法
4. Select New 这个datatable，并删除flag column中值为空的行。

```Csharp
static DataTable CompareAndDelete(DataTable dtNew, DataTable dtOld)
{
    // DataTable has only 2 columns
    dtNew.PrimaryKey = new DataColumn[]{ dtNew.Columns[0], dtNew.Columns[1]};
    dtOld.PrimaryKey = new DataColumn[] { dtOld.Columns[0], dtOld.Columns[1] };

    DataColumn column;
    column = new DataColumn();
    column.DataType = System.Type.GetType("System.String");
    column.ColumnName = "Flag";

    dtNew.Columns.Add(column);
    dtNew.Merge(dtOld);
    dtNew.Select("[Flag] = ''");

    foreach(DataRow row in dtNew.Rows)
    {
        row.Delete();
    }
    return dtNew;
}
```

## 奇怪的错误

在使用dataTable的select时，发现了奇怪的问题。

```Csharp
DataTable Name = new DataTable();
Name.Columns.Add("Test");
Name.Columns.Add("TestA");
Name.Rows.Add(new object[] { 1, "2" });
// 2 处的select 都会为匹配得到。
int intCountNoSpace = Name.Select("[Test] = '1'").Count();
int intCountWithSpace = Name.Select("[Test] = '1 '").Count();

// 如果添加如下代码：
Name.Columns["Test"].DataType = System.Type.GetType("System.Int32");
// 则只有noSpace会被匹配得到
int intCountNoSpace = Name.Select("[Test] = '1'").Count();
int intCountWithSpace = Name.Select("[Test] = '1 '").Count();
```

所以在使用select时，要先确认该列数据的类型，然后再做判断。如果为默认的objecct类型会默认使用字符串的匹配方式。需要**十分的注意**。




