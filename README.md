# Website for Houlang



## 开发



```shell
npm start
```



## 生产构建



```shell
npm run build
```



## 更新



### 更新成功案件

- 文件路径：`/content/cases/xxx.md`
- 必要的 frontmatter：
  - title：文章的标题，会显示在浏览器标签的名字。使用英文引号包裹
  - result：案件的结果。使用英文引号包裹
  - date：案件的时间，格式为 `2023-09-16`，不需要引号。
  - slug：该案件页面的 URL，使用英文引号包裹。
    - 必须使用小写字母或数字，不允许包含空格
    - 例如将 `slug` 设置为 `this-is-a-case`，则该页面的最终 URL 为 `https://xxx.com/cases/this-is-a-case`。
  - author：案件的作者（相关律师），格式为 `["name"]`，如果有多个人名，使用逗号分隔，如 `["name1", "name2"]`。
  
  

### 更新业务领域



- 文件路径：`/content/practices/xxx.md`

- 必要的 frontmatter：

  - title：业务的标题，会显示在浏览器标签的名字，也会显示在【业务领域】页面。使用英文引号包裹
  - slug：该业务页面的 URL，使用英文引号包裹。
    - 必须使用小写字母或数字，不允许包含空格
    - 例如将 `slug` 设置为 `criminal-defense`，则该页面的最终 URL 为 `https://xxx.com/practices/criminal-defense`。

  - rank：该业务在【业务领域】页面的排序。数字越小，排序越靠前。

### 更新专业视点

- 文件路径：`/content/publications/xxx.md`
- 必要的 frontmatter：
  - title：文章的标题，会显示在浏览器标签的名字。使用英文引号包裹
  - date：案件的时间，格式为 `2023-09-16`，不需要引号。
  - slug：该案件页面的 URL，使用英文引号包裹。
    - 必须使用小写字母或数字，不允许包含空格
    - 例如将 `slug` 设置为 `this-is-an-article`，则该页面的最终 URL 为 `https://xxx.com/publications/this-is-an-article`。
  - author：案件的作者（相关律师），格式为 `["name"]`，如果有多个人名，使用逗号分隔，如 `["name1", "name2"]`。



### 更新律师信息

- 文件路径：`/src/data/team.json`
- 字段含义解析：
  - pos：该律师的排序。数字越小，排序越靠前。
  - name：律师姓名
  - title：职位
  - avatar：个人照片的文件名（照片应统一存放在 `/src/images` 文件夹中）
  - desc：一句话简介，会出现在首页的律师照片下方，如`解决案件XX起\n加入于XXXX年`。如需换行请使用 `\n` 断开。
  - resume：详细的介绍，会出现在律师团队页面的照片左侧。如需换行请使用 `\n` 断开。
  - phone：手机号
  - email：邮箱
  - area：执业领域
  - career：工作经历
  - featuredArticles：显示在个人简介下方的「最新文章」，默认显示 3 篇。
    - title：文章的标题
    - path：文章的 slug（仅限专业视点类文章）

### 更新首页信息

- 文件路径：`/src/data/homePageData.js`
- 字段解析：
  - heroText：首页顶部的介绍语
  - faqList：首页常见问题，可以增加或删除条目
  - caseList：首页成功案例展示
    - slug：对应案例的 slug
  - serviceList：首页展示的业务领域

### 更新联系方式

- 文件路径：`/src/data/contactInfo.js`





