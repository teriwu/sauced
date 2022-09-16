from unittest import TestCase

class FeatureTests(TestCase):
    def test_fastapi_installed(self):
        try:
            import pytest  # noqa: F401
        except ModuleNotFoundError:
            self.fail("Could not find 'fastapi' installed in the environment")