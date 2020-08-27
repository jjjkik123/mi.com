### git操作
首先创建项目目录，在项目根目录下创建文件
README.md 项目说明文件
.gitignore git忽略列表
gitignroe每行写一个目录或文件，表示不需要git管理的内容

### 项目初始化
```bash
$ git init  #初始化一个git仓库
$ npm init -y #初始化node
```

### 用户设置
```bash
# 用户设置
$ git config --global user.name "fbq"
$ git config --global user.email "402685014@qq.com"
```

### 常用命令
```bash
$ git status  #查看状态
$ git add filname   #添加管理(添加到暂存区),指定文件
$ git add path/     #添加指定目录
$ git add .         #添加项目中所有文件和目录

$ git rm --cached filename/path #从暂存区中移除(不管理)

$ git commit -m "v 1.0.0" #提交版本

$ git log #查看提交日记

$ git reset --hard 版本hash前六位 #恢复到历史版本

$ git --help  #查看帮助文档

$ git checkout filename #找回删除的文件
```

### 远程仓库操作
```bash
$ git remote add origin https://  #设置仓库源地址

$ git push -u origin master #本地仓库master分支 推送到远程仓库

$ git pull origin master 

$ git clone https://... # 第一次获得项目 使用克隆
```

###
```bash
$ git branch 分支名 #创建分支

$ git branch #查看分支

$ git checkout 分支名 #切换分支

$ git merge 分支名 #合并分支
```