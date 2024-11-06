import math

def is_prime(n):
    if n < 2:
        return False
    for i in range(2, math.isqrt(n) + 1):
        if n % i == 0:
            return False
    return True



print(is_prime(2))  # True

print(is_prime(3))  # True

print(is_prime(4))  # False



