import os
from psycopg_pool import ConnectionPool

pool = ConnectionPool(conninfo=os.environ["DATABASE_URL"])

class RestaurantQueries:
    def get_restaurants(self):
        print("Got Restaurants")
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT id, price, rating, name, phone
                    FROM restaurants
                    """
                )

                results = []
                for row in cur.fetchall():
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                    results.append(record)

                return results

    def get_restaurant(self, id):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT id, price, rating, name, phone
                    FROM restaurants
                    WHERE id = %s
                    """,
                    [id],
                )
                
                record = None
                row = cur.fetchone()
                if row is not None:
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                
                return record

    def create_restaurant(self, restaurant):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    INSERT INTO restaurants (
                        price, rating, name, phone
                    )
                    VALUES (%s, %s, %s, %s)
                    RETURNING id
                    """,
                    [
                        restaurant.price,
                        restaurant.rating,
                        restaurant.name,
                        restaurant.phone,
                    ],
                )
                
                record = None
                row = cur.fetchone()
                if row is not None:
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]

                return record

    def update_restaurant(self,restaurant, data):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    UPDATE restaurants
                    SET price = %s
                      , rating = %s
                      , name = %s
                      , phone = %s
                    WHERE id = %s
                    RETURNING id, price, rating, name, phone
                    """,
                    [
                        data.price,
                        data.rating,
                        data.name,
                        data.phone,
                        restaurant
                    ]
                )

                record = None
                row = cur.fetchone()
                if row is not None:
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                return record

    def delete_restaurant(self, restaurant_id):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    DELETE FROM restaurants
                    WHERE id = %s
                    """,
                    [restaurant_id],
                )