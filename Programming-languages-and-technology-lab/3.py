hours = int(input("Введите часы начала: "))
minutes = int(input("Введите минуты начала: "))
duration = int(input("Введите продолжительность в минутах: "))

total_minutes = hours * 60 + minutes + duration
end_hours = (total_minutes // 60) % 24
end_minutes = total_minutes % 60

print(f"Время окончания: {end_hours:02d}:{end_minutes:02d}")