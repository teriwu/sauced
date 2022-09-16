from unittest import TestCase


class FeatureTests(TestCase):
    def test_pytest_installed(self):
        try:
            import psycopg  # noqa: F401
        except ModuleNotFoundError:
            self.fail("Could not find 'psycopg' installed in the environment")
