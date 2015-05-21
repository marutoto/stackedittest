//-- kk refs ----------------------------------------------------
/*
 * declaration files
 */

// common.d.tsみたいなのを用意すべきだと思う
/// <reference path="../declaration/jquery.d.ts" />
/// <reference path="../declaration/qq.d.ts" />


/*
 * this module files
 *
 * A.ts と M_extA.ts の位置を入れ替えると実行時エラー
 */

/// <reference path="A.ts" />
/// <reference path="C.ts" />
/// <reference path="B.ts" />

/// <reference path="Alpha_extA.ts" />


/*
 * other dependency module
 */
