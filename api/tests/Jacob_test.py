from unittest import TestCase


class FeatureTests(TestCase):
    def test_pytest_installed(self):
        try:
            import psycopg  
        except ModuleNotFoundError:
            self.fail("Could not find 'psycopg' installed in the environment")
