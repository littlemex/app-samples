// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX - License - Identifier: Apache - 2.0
package main

import (
	"fmt"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	"local.packages/models"
	"os"
)

func descRedshift() {
	// FIXME: DYNAMO_ENDPOINTの有無でcreateClient, createClientDevを呼び分ける
	// FIXME: Client作成とクエリ処理を分ける
	createRedshiftClientDev()
}

func createRedshiftClientDev() {
	r_host := os.Getenv("REDSHIFT_HOST")
	r_user := os.Getenv("REDSHIFT_USER")
	r_password := os.Getenv("REDSHIFT_PASSWORD")
	r_db_name := os.Getenv("REDSHIFT_DB_NAME")
	fmt.Println(r_host, r_user, r_password, r_db_name)
	db, err := gorm.Open("postgres", "host="+r_host+" user="+r_user+" password="+r_password+" dbname="+r_db_name+" sslmode=disable")
	if err != nil {
		panic(err.Error())
	}
	defer db.Close()
	db.LogMode(true)

	// スキーマのマイグレーション テーブルがない時は自動生成、ある時は何もしない
	db.AutoMigrate(&models.User{})

	user := models.User{Name: "Jack", Password: "jack", Email: "Jack@sample.com"}
	db.NewRecord(&user)
	db.Create(&user)

	db.Find(&user)
	fmt.Println(&user.Name)
}
