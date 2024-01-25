<BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" component={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<NotFoundPage />}/>
       </Routes>
      </BrowserRouter>