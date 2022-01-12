package main

import (
    "fmt"
    "flag"
)

func sub1command(sc *SubCommand) {
    fmt.Println("sub1:",sc.flag)
}

func sub2command(sc *SubCommand) {
    fmt.Println("sub2:",sc.flag, "hogehoge")
}

type SubCommand struct {
    flag string
    arg int
    is_exist bool
}

func (sc *SubCommand) set(s string, i int, b bool) {
    sc.flag = s
    sc.arg = i
    sc.is_exist = b
}

func (sc *SubCommand) view() {
    fmt.Println(sc.flag, sc.arg, sc.is_exist)
}

func (sc *SubCommand) exec() {
    if (sc.flag == "sub1") {
        sub1command(sc)
    } else if (sc.flag == "sub2") {
        sub2command(sc)
    }
}

func argparse(sc *SubCommand) {
    // go run helloscript.go -sub=xxx -arg=1 -exist=true
    var s string
    var i int
    var b bool
    flag.StringVar(&s, "sub", "sub1", "sub1 or sub2 or sub3")
    flag.IntVar(&i, "arg", 0, "sub1 or sub2 or sub3")
    flag.BoolVar(&b, "exist", false, "sub1 or sub2 or sub3")
    flag.Parse()
    sc.set(s, i, b)
    sc.view()
}

func main() {
    sc := SubCommand{}
    argparse(&sc)
    sc.exec()
}

