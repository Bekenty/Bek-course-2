import math

# Ввод координат первой точки A
print("Введите координаты точки A:")
x1 = float(input("x1 = "))
y1 = float(input("y1 = "))


print("\nВведите координаты точки B:")
x2 = float(input("x2 = "))
y2 = float(input("y2 = "))

# Вычисление расстояния между точками по формуле:
# d = √((x2 - x1)^2 + (y2 - y1)^2)
distance = math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

# Вывод результата
print("\n--- Результат ---")
print(f"Расстояние между точками A и B: {distance}")