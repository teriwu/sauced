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
                    SELECT id, price, rating, name, phone, address, city, zip_code, country, state, start_, end_, day, picture
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
                    SELECT id, price, rating, name, phone, address, city, zip_code, country, state, start_, end_, day, picture
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
                        price, rating, name, phone, address, city, zip_code, country, state, start_, end_, day, picture
                    )
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                    RETURNING id
                    """,
                    [
                        restaurant.price,
                        restaurant.rating,
                        restaurant.name,
                        restaurant.phone,
                        restaurant.address,
                        restaurant.city,
                        restaurant.zip_code,
                        restaurant.country,
                        restaurant.state,
                        restaurant.start_,
                        restaurant.end_,
                        restaurant.day,
                        restaurant.picture,
                    ],
                )
                
                record = None
                row = cur.fetchone()
                if row is not None:
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                response = {
                    "id": record["id"],
                    "price": restaurant.price,
                    "rating": restaurant.rating,
                    "name": restaurant.name,
                    "phone": restaurant.phone,
                    "address":restaurant.address,
                    "city":restaurant.city,
                    "zip_code":restaurant.zip_code,
                    "country":restaurant.country,
                    "state":restaurant.state,
                    "start_":restaurant.start_,
                    "end_":restaurant.end_,
                    "day":restaurant.day,
                    "picture":restaurant.picture,
                }
                return response

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
                      , address = %s
                      , city = %s
                      , zip_code = %s
                      , country = %s
                      , state = %s
                      , start_ = %s
                      , end_ = %s
                      , day = %s
                      , picture = %s
                    WHERE id = %s
                    RETURNING id, price, rating, name, phone, address, city, zip_code, country, state, start_, end_, day, picture
                    """,
                    [
                        data.price,
                        data.rating,
                        data.name,
                        data.phone,
                        data.address,
                        data.city,
                        data.zip_code,
                        data.country,
                        data.state,
                        data.start_,
                        data.end_,
                        data.day,
                        data.picture,
                        restaurant
                    ]
                )

                record = None
                row = cur.fetchone()
                if row is not None:
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                # response = {
                #     "id": record["id"],
                #     "price": restaurant.price,
                #     "rating": restaurant.rating,
                #     "name": restaurant.name,
                #     "phone": restaurant.phone,
                #     "address":restaurant.address,
                #     "city":restaurant.city,
                #     "zip_code":restaurant.zip_code,
                #     "country":restaurant.country,
                #     "state":restaurant.state,
                #     "start_":restaurant.start_,
                #     "end_":restaurant.end_,
                #     "day":restaurant.day,
                #     "picture":restaurant.picture,
                # }
                # return response
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


class ReviewQueries:
    def get_reviews(self):
        print("Got Reviews")
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT id, title, content, post_date, rating
                    FROM reviews
                    """
                )

                results = []
                for row in cur.fetchall():
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                    for key, value in record.items():
                        if key == 'post_date':
                            print("the key is " + key)
                            record['post_date'] = str(record['post_date'])
                    print(type((record['post_date'])))
                    results.append(record)
                print(results)
                # print(results[post_date])
                # response = {
                #     "id": results.id,
                #     "title": results.title,
                #     "content": results.content,
                #     "rating": results.rating,
                #     "post_date": datetime.date(results.post_date),
                # }

                return results    

    def get_review(self, id):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT id, title, content, post_date, rating
                    FROM reviews
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
                    for key, value in record.items():
                        if key == 'post_date':
                            print("the key is " + key)
                            record['post_date'] = str(record['post_date'])
                
                return record      
                
    def create_review(self, review):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    INSERT INTO reviews (
                        title, content, rating
                    )
                    VALUES (%s, %s, %s)
                    RETURNING id
                    """,
                    [
                        review.title,
                        review.content,
                        review.rating,
                    ],
                )
                
                record = None
                row = cur.fetchone()
                if row is not None:
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                response = {
                    "id": record["id"],
                    "title": review.title,
                    "content": review.content,
                    "rating": review.rating,
                    "post_date": review.post_date,
                }
                return response

    def update_review(self,review, data):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    UPDATE reviews
                    SET title = %s
                      , content = %s
                      , rating = %s
                    WHERE id = %s
                    RETURNING id, title, content, rating, post_date
                    """,
                    [
                        data.title,
                        data.content,
                        data.rating,
                        review
                    ]
                )
                record = None
                row = cur.fetchone()
                if row is not None:
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                    for key, value in record.items():
                        if key == 'post_date':
                            print("the key is " + key)
                            record['post_date'] = str(record['post_date'])
                return record


    def delete_review(self, review_id):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    DELETE FROM reviews
                    WHERE id = %s
                    """,
                    [review_id],
                )

class LocationQueries:
    def get_locations(self):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT id, address, city, zip_code, country, state
                    FROM locations
                    """
                )

                results = []
                for row in cur.fetchall():
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                    results.append(record)
                
                return results

    def get_location(self, id):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT id, address, city, zip_code, country, state
                    FROM locations
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

    def create_location(self, location):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    INSERT INTO locations (
                        address, city, zip_code, country, state
                    )
                    VALUES (%s, %s, %s, %s, %s)
                    RETURNING id
                    """,
                    [
                        location.address,
                        location.city,
                        location.zip_code,
                        location.country,
                        location.state,
                    ],
                )
                
                record = None
                row = cur.fetchone()
                if row is not None:
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                response = {
                    "id": record["id"],
                    "address": location.address,
                    "city": location.city,
                    "zip_code": location.zip_code,
                    "country": location.country,
                    "state": location.state,
                }
                return response

    def update_restaurant(self, location, data):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    UPDATE locations
                    SET address = %s
                      , city = %s
                      , zip_code = %s
                      , country = %s
                      , state = %s
                    WHERE id = %s
                    RETURNING address, city, zip_code, country, state
                    """,
                    [
                        data.address,
                        data.city,
                        data.zip_code,
                        data.country,
                        data.state,
                        location
                    ]
                )

                record = None
                row = cur.fetchone()
                if row is not None:
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                return record

    def delete_location(self, location_id):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    DELETE FROM locations
                    WHERE id = %s
                    """,
                    [location_id],
                )


class PictureQueries:
    def create_picture(self, picture):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    INSERT INTO pictures (
                        url
                    )
                    VALUES (%s)
                    RETURNING id
                    """,
                    [picture.url]
                )
                
                record = None
                row = cur.fetchone()
                if row is not None:
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                response = {
                    "id": record["id"],
                    "url": picture.url,
                }
                print(response)
                return response

    def get_pictures(self):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT id, url
                    FROM pictures
                    """
                )

                results = []
                for row in cur.fetchall():
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                    results.append(record)

                return results

    def get_picture(self, id):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT id, url
                    FROM pictures
                    WHERE id = %s
                    """,
                    [id]
                )

                record = None
                row = cur.fetchone()
                if row is not None:
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                
                return record

    def update_picture(self, picture, data):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    UPDATE pictures
                    SET url = %s
                    WHERE id = %s
                    RETURNING id, url
                    """,
                    [data.url, picture]
                )

                record = None
                row = cur.fetchone()
                if row is not None:
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                return record

    def delete_picture(self, picture_id):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    DELETE FROM pictures
                    WHERE id = %s
                    """,
                    [picture_id],
                )


class CategoriesQueries:
    def get_categories(self):
        print("Got Categories")
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT id, title, alias
                    FROM categories
                    """
                )

                results = []
                for row in cur.fetchall():
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                    results.append(record)

                return results

    def get_category(self, id):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT id, title, alias
                    FROM categories
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

    def create_category(self, category):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    INSERT INTO categories (
                        title, alias
                    )
                    VALUES (%s, %s)
                    RETURNING id
                    """,
                    [
                        category.title,
                        category.alias,
                    ],
                )
                
                record = None
                row = cur.fetchone()
                if row is not None:
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                response = {
                    "id": record["id"],
                    "title": category.title,
                    "alias": category.alias,
                }
                return response

    def update_category(self,category, data):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    UPDATE categories
                    SET title = %s
                      , alias = %s
                    WHERE id = %s
                    RETURNING id, title, alias
                    """,
                    [
                        data.title,
                        data.alias,
                        category
                    ]
                )

                record = None
                row = cur.fetchone()
                if row is not None:
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                return record


    def delete_category(self, category_id):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    DELETE FROM categories
                    WHERE id = %s
                    """,
                    [category_id],
                )


class HourQueries:
    def get_hours(self):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT id, is_overnight, end_, day, start_
                    FROM hours
                    """,
                )

                results = []
                for row in cur.fetchall():
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                    results.append(record)
                return results
    def get_hour(self, id):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT id, is_overnight, end_, day, start_
                    FROM hours
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

    def create_hour(self, hour):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    INSERT INTO hours (
                        is_overnight, end_, day, start_
                    )
                    VALUES (%s, %s, %s, %s)
                    RETURNING id
                    """,
                    [
                        hour.is_overnight,
                        hour.end_,
                        hour.day,
                        hour.start_,
                    ],
                )

                record = None
                row = cur.fetchone()
                if row is not None:
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                    response = {
                        "id": record["id"],
                        "is_overnight": hour.is_overnight,
                        "end_": hour.end_,
                        "day": hour.day,
                        "start_": hour.start_,
                    }
                return response

    def update_hour(self, hour, data):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    UPDATE hours
                    SET is_overnight = %s
                    , end_ = %s
                    , day = %s
                    , start_ = %s
                    WHERE id = %s
                    RETURNING id, is_overnight, end_, day, start_
                    """,
                    [
                        data.is_overnight,
                        data.end_,
                        data.day,
                        data.start_,
                        hour

                    ]
                )

                record = None
                row = cur.fetchone()
                if row is not None:
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                return record

    def delete_hour(self, hour_id):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    DELETE FROM hours
                    WHERE id = %s
                    """,
                    [hour_id],
                )

class UserQueries:
    def user_list(self):
        print("Gotcha Users")
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT id, password, first_name, last_name, email, username FROM users
                    """
                )

                results = []
                for row in cur.fetchall():
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                    results.append(record)

                return results

    def get_user(self, id):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT id, password, first_name, last_name, email, username FROM users
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

    def create_user(self, user):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    INSERT INTO users (
                        password, first, last, email, username
                    )
                    VALUES (%s, %s, %s, %s, %s)
                    RETURNING id
                    """,
                    [
                        user.password,
                        user.first,
                        user.last,
                        user.email,
                        user.username,
                    ],
                )

                record = None
                row = cur.fetchone()
                if row is not None:
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                response = {
                    "id": record["id"],
                    "password": user.password,
                    "first": user.first,
                    "last": user.last,
                    "email": user.email,
                    "username": user.username,
                }
                return response

    def update_user(self, user, data):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    UPDATE users
                    SET password = %s
                      , first_name = %s
                      , last_name = %s
                      , email = %s
                      , username = %s
                      WHERE id = %s
                      RETURNING id, password, first_name, last_name, email, username
                    """,
                    [
                        data.password,
                        data.first_name,
                        data.last_name,
                        data.email,
                        data.username,
                        user
                    ]
                )

                record = None
                row = cur.fetchone()
                if row is not None:
                    record = {}
                    for i, column, in enumerate(cur.description):
                        record[column.name] = row[i]
                return record

#    def delete_user(self, user_id):
#        with pool.connection() as conn:
#            with conn.cursor() as cur:
#                cur.execute(
#                    """
#                    DELETE FROM users
#                    WHERE id = %s
#                    """,
#                    [user_id],
#                )