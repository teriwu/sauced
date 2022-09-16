import os
from unittest import TestCase


class FeatureTests(TestCase):
    def test_pytest_installed(self):
        try:
            import pytest  # noqa: F401
        except ModuleNotFoundError:
            self.fail("Could not find 'pytest' installed in the environment")