package main

import (
	"math/rand"
	"time"
)

// Create and seed the generator.
	// Typically a non-fixed seed should be used, such as time.Now().UnixNano().
	// Using a fixed seed will produce the same output on every run.
	// r := rand.New(rand.NewSource(99))
	func seedRand() *rand.Rand {
		seed := time.Now().UnixNano()
		return rand.New(rand.NewSource(seed))
	}

	r := seedRand()
	