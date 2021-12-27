package models

import (
	"github.com/jinzhu/gorm"
	"time"
)

type Model struct {
	ID        uint      `json:"id" gorm:"primary_key"`
	CreatedAt time.Time `json:"createdAt"`
	UpdatedAt time.Time `json:"updatedAt"`
	Deleted   uint      `json:"-"`
}

type User struct {
	gorm.Model
	Name     string `gorm:"size:255"`
	Password string `gorm:"size:255"`
	Email    string `gorm:"size:255"`
}
