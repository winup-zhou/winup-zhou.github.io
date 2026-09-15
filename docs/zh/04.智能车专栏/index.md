---
title: 智能车专栏
date: 2026-09-15 16:00:00
permalink: /origincar
catalogue: true
layout: TkCataloguePage
path: zh/04.智能车专栏
desc: OriginCar Pro 智能车竞赛向操作说明
pageTitle: 智能车专栏
sidebar: false
article: false
---

::: center
![示意图](/origincar/common/01-image1.webp)

**OriginCar Pro**

**竞赛向操作说明**

2025 年 12 月
:::

## 前言

在 ROS/ROS2 开发过程中，大家普遍使用到的开发方法都是基于虚拟机/双系统进行，本质上是希望基于 Ubuntu 良好的生态环境进行。

但是两种方式各有各自的好处，也有各自的弊端，例如虚拟机很大而且并不能运行 GPU 等基于一系列的理由了，针对种种弊端，微软提供了 Windows Subsystem for Linux (WSL)工具，将 Linux 与 Windows 深度集成，解决了很多痛点。

::: info
有关 WSL 的完整介绍和完整文档，请参阅：[Windows Subsystem for Linux 文档 \| Microsoft Learn](https://learn.microsoft.com/zh-cn/windows/wsl/)
:::

根据比赛要实现的目标，我们将从最简单的功能开始，逐步完成各个功能的编写。<strong>本文默认你已经有一定的 ROS2 基础。</strong>
