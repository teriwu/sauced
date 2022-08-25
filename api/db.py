# import os
# from psycopg_pool import ConnectionPool

# pool = ConnectionPool(conninfo=os.environ["DATABASE_URL"])

# class RestaurantQueries:
#     def get_all_restaurants(self):
#         with pool.connection() as conn:
#             with conn.cursor() as cur:
#                 cur.execute(
#                     """
#                     SELECT id, price, rating, name, phone
#                     FROM restaurants
#                     """
#                 )

#                 results = []
#                 for row in cur.fetchall():
#                     record = {}
#                     for i, column in enumerate(cur.description):
#                         record[column.name] = row[i]
#                     results.append(record)

#                 return results