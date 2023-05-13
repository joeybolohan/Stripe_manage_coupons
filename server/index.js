app.post('/api/coupons', async (req, res) => {
    try {
        const { percent_off, duration, duration_in_months } = req.body;
        const coupon = await stripe.coupons.create({
            percent_off,
            duration,
            duration_in_months,
        });
        res.json(coupon);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/coupons/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const coupon = await stripe.coupons.retrieve(id);
        res.json(coupon);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/api/coupons/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { metadata } = req.body;
        const coupon = await stripe.coupons.update(id, { metadata });
        res.json(coupon);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/api/coupons/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await stripe.coupons.del(id);
        res.json(deleted);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/coupons', async (req, res) => {
    try {
        const coupons = await stripe.coupons.list({ limit: 3 });
        res.json(coupons);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
