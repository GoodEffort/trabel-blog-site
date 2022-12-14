import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Navbar from '../Navbar.vue'

describe('Navbar', () => {
    it('renders properly', () => {
        const wrapper = mount(Navbar);
        expect(wrapper.findAll('.list-group-item').entries()).toBe(4);
    })
});