## 位运算

### 1、基本概念

ES 中所有的数值都以`IEEE-754` 64 位格式存储，对于有符号数（整数），前 31 位用于表示数值，每个位置上即 2 的 X 次方，将这些加起来就是它表示的数值，第 32 位为符号位，0 表示正数，1 表示负数。

负数以二进制补码存储，通过以下三个步骤计算得出：

- 1、求出这个数值的绝对值的二进制码
- 2、将这个求得的二进制码按位取反，原来是 0 则为 1，原来是 1 则为 0
- 3、将二进制反码+1 即为求得的二进制补码

浮点数的表示法略微有些

#### 1.1、按位非，`~`

**二进制码取反**

根据之前负数的补码表示法则，可以得出一个结论按位非操作是**原数值的相反数再减去 1**

#### 1.2、按位与，`&`

#### 1.3、按位或，`|`

#### 1.4、按位异或，`^`

#### 1.5、左移，`<<`

#### 1.6、右移，`>>`

#### 1.7、无符号右移，`>>>`

按位与操作就是将两个操作数值的每一位对齐，若同一位，两个数都是 1，则结果为 1，否则为 0。

### 2、为什么 Number.MAX_SAFE_INTEGER 是 2 的 53 次方减 1？

https://www.zhihu.com/question/29010688/answer/42886646

### 3、为什么 0.2+0.1 !==0.3?

https://zhuanlan.zhihu.com/p/363254961

### 4、系统权限的另类设计

### 5、其它

算法中的应用