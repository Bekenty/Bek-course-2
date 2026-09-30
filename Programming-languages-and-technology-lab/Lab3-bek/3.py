class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

    def perimeter(self):
        return 2 * (self.width + self.height)

    def info(self):
        print("Ширина:", self.width)
        print("Высота:", self.height)
        print("Площадь:", self.area())
        print("Периметр:", self.perimeter())


# 1 объект
rectangle1 = Rectangle(5, 10)
print("Прямоугольник 1:")
rectangle1.info()

# 2 объект
rectangle2 = Rectangle(7, 3)
print("\nПрямоугольник 2:")
rectangle2.info()

# 3 объект
rectangle3 = Rectangle(4, 8)
print("\nПрямоугольник 3:")
rectangle3.info()

print("\nПосле изменения первого прямоугольника:")

rectangle1.width = 8
rectangle1.height = 12

rectangle1.info()

print("\nТестовые сценарии:")

test1 = Rectangle(2, 5)
print("Тест 1. Площадь:", test1.area())
print("Периметр:", test1.perimeter())

test2 = Rectangle(3, 3)
print("Тест 2. Площадь:", test2.area())
print("Периметр:", test2.perimeter())

test3 = Rectangle(10, 20)
print("Тест 3. Площадь:", test3.area())
print("Периметр:", test3.perimeter())