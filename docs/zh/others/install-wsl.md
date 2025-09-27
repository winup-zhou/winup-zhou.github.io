# 简明WSL2安装教程

## 何为WSL
适用于 Linux 的 Windows 子系统（WSL）是 Windows 的一项功能，可用于在 Windows 计算机上运行 Linux 环境，而**无需单独的虚拟机或双系统**。  
WSL 旨在为想要同时使用 Windows 和 Linux 的开发人员提供无缝高效的体验。

---

## 系统要求
::: info
- **Windows 10 版本 2004 及更高版本**（内部版本 19041 及更高版本）或 **Windows 11**
- 启用 **适用于 Linux 的 Windows 子系统** 功能
- 启用 **虚拟机平台** 功能
:::
::: warning
如果您需要游玩三角洲行动等**带有ACE反作弊**的游戏，则不可使用WSL。   
可能会出现兼容性问题。
:::
---

## 安装步骤

本文将以安装[Ubuntu-20.04](https://apps.microsoft.com/detail/9mttcl66cpxj)发行版为例进行讲解。

### 启用所需的Windows功能
如果你的系统满足最低系统要求，则该功能默认已被安装在系统中，但尚未启用。  
要启用WSL的相关功能，我们需要先打开**设置**，并搜索**启用或关闭 Windows 功能**。  

![启用图中所示的两个功能](/wsl-1.png)  

启用图中所示的两个功能。

::: tip
如果你熟悉命令行，在Powershell中使用下面的两条命令可以起到同样效果。  
- 启用 **适用于 Linux 的 Windows 子系统** 功能
```
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```
- 启用 **虚拟机平台** 功能
```
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```
:::

启用后，请**重启**计算机准备后续步骤。

---

### 安装WSL的基本组件
::: info
该操作需要质量较好的网络(可以流畅的连接到GitHub)  
如果你的网络无法做到这点，请事先下载以下文件:
- WSL2安装程序(文件名称为**wsl.2.x.x.x.x64.msi**): [Releases · microsoft/WSL](https://github.com/microsoft/WSL/releases/latest)  
- USBIPD安装程序(文件名称为**usbipd-win_x.x.x_x64.msi**): [Releases · dorssel/usbipd-win](https://github.com/dorssel/usbipd-win/releases/latest)
:::

