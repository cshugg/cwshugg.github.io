(function() {var implementors = {};
implementors["bytes"] = [{"text":"impl Ord for Bytes","synthetic":false,"types":[]},{"text":"impl Ord for BytesMut","synthetic":false,"types":[]}];
implementors["chrono"] = [{"text":"impl Ord for NaiveDate","synthetic":false,"types":[]},{"text":"impl Ord for NaiveDateTime","synthetic":false,"types":[]},{"text":"impl Ord for IsoWeek","synthetic":false,"types":[]},{"text":"impl Ord for NaiveTime","synthetic":false,"types":[]},{"text":"impl&lt;Tz:&nbsp;TimeZone&gt; Ord for Date&lt;Tz&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Tz:&nbsp;TimeZone&gt; Ord for DateTime&lt;Tz&gt;","synthetic":false,"types":[]}];
implementors["http"] = [{"text":"impl Ord for HeaderValue","synthetic":false,"types":[]},{"text":"impl Ord for StatusCode","synthetic":false,"types":[]},{"text":"impl Ord for Version","synthetic":false,"types":[]}];
implementors["httpdate"] = [{"text":"impl Ord for HttpDate","synthetic":false,"types":[]}];
implementors["ipnet"] = [{"text":"impl Ord for IpAddrRange","synthetic":false,"types":[]},{"text":"impl Ord for Ipv4AddrRange","synthetic":false,"types":[]},{"text":"impl Ord for Ipv6AddrRange","synthetic":false,"types":[]},{"text":"impl Ord for IpNet","synthetic":false,"types":[]},{"text":"impl Ord for Ipv4Net","synthetic":false,"types":[]},{"text":"impl Ord for Ipv6Net","synthetic":false,"types":[]},{"text":"impl Ord for IpSubnets","synthetic":false,"types":[]},{"text":"impl Ord for Ipv4Subnets","synthetic":false,"types":[]},{"text":"impl Ord for Ipv6Subnets","synthetic":false,"types":[]}];
implementors["log"] = [{"text":"impl Ord for Level","synthetic":false,"types":[]},{"text":"impl Ord for LevelFilter","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Ord for Metadata&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Ord for MetadataBuilder&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["mime"] = [{"text":"impl&lt;'a&gt; Ord for Name&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Ord for Mime","synthetic":false,"types":[]}];
implementors["mio"] = [{"text":"impl Ord for PollOpt","synthetic":false,"types":[]},{"text":"impl Ord for Ready","synthetic":false,"types":[]},{"text":"impl Ord for UnixReady","synthetic":false,"types":[]},{"text":"impl Ord for Token","synthetic":false,"types":[]}];
implementors["openssl"] = [{"text":"impl Ord for BigNumRef","synthetic":false,"types":[]},{"text":"impl Ord for BigNum","synthetic":false,"types":[]},{"text":"impl Ord for CMSOptions","synthetic":false,"types":[]},{"text":"impl Ord for OcspFlag","synthetic":false,"types":[]},{"text":"impl Ord for Pkcs7Flags","synthetic":false,"types":[]},{"text":"impl Ord for SslOptions","synthetic":false,"types":[]},{"text":"impl Ord for SslMode","synthetic":false,"types":[]},{"text":"impl Ord for SslVerifyMode","synthetic":false,"types":[]},{"text":"impl Ord for SslSessionCacheMode","synthetic":false,"types":[]},{"text":"impl Ord for ExtensionContext","synthetic":false,"types":[]},{"text":"impl Ord for ShutdownState","synthetic":false,"types":[]},{"text":"impl Ord for X509CheckFlags","synthetic":false,"types":[]}];
implementors["proc_macro2"] = [{"text":"impl Ord for Ident","synthetic":false,"types":[]}];
implementors["regex_syntax"] = [{"text":"impl Ord for Span","synthetic":false,"types":[]},{"text":"impl Ord for Position","synthetic":false,"types":[]},{"text":"impl Ord for Literal","synthetic":false,"types":[]},{"text":"impl Ord for ClassUnicodeRange","synthetic":false,"types":[]},{"text":"impl Ord for ClassBytesRange","synthetic":false,"types":[]},{"text":"impl Ord for Utf8Sequence","synthetic":false,"types":[]},{"text":"impl Ord for Utf8Range","synthetic":false,"types":[]}];
implementors["signal_hook_registry"] = [{"text":"impl Ord for SigId","synthetic":false,"types":[]}];
implementors["sodiumoxide"] = [{"text":"impl Ord for Nonce","synthetic":false,"types":[]},{"text":"impl Ord for Tag","synthetic":false,"types":[]},{"text":"impl Ord for Nonce","synthetic":false,"types":[]},{"text":"impl Ord for Tag","synthetic":false,"types":[]},{"text":"impl Ord for Nonce","synthetic":false,"types":[]},{"text":"impl Ord for Tag","synthetic":false,"types":[]},{"text":"impl Ord for Tag","synthetic":false,"types":[]},{"text":"impl Ord for Tag","synthetic":false,"types":[]},{"text":"impl Ord for Tag","synthetic":false,"types":[]},{"text":"impl Ord for PublicKey","synthetic":false,"types":[]},{"text":"impl Ord for Tag","synthetic":false,"types":[]},{"text":"impl Ord for Nonce","synthetic":false,"types":[]},{"text":"impl Ord for Digest","synthetic":false,"types":[]},{"text":"impl Ord for Digest","synthetic":false,"types":[]},{"text":"impl Ord for Digest","synthetic":false,"types":[]},{"text":"impl Ord for Key","synthetic":false,"types":[]},{"text":"impl Ord for PublicKey","synthetic":false,"types":[]},{"text":"impl Ord for Tag","synthetic":false,"types":[]},{"text":"impl Ord for Salt","synthetic":false,"types":[]},{"text":"impl Ord for HashedPassword","synthetic":false,"types":[]},{"text":"impl Ord for Salt","synthetic":false,"types":[]},{"text":"impl Ord for HashedPassword","synthetic":false,"types":[]},{"text":"impl Ord for Salt","synthetic":false,"types":[]},{"text":"impl Ord for HashedPassword","synthetic":false,"types":[]},{"text":"impl Ord for Tag","synthetic":false,"types":[]},{"text":"impl Ord for Nonce","synthetic":false,"types":[]},{"text":"impl Ord for Header","synthetic":false,"types":[]},{"text":"impl Ord for Digest","synthetic":false,"types":[]},{"text":"impl Ord for PublicKey","synthetic":false,"types":[]},{"text":"impl Ord for Signature","synthetic":false,"types":[]},{"text":"impl Ord for Nonce","synthetic":false,"types":[]},{"text":"impl Ord for Nonce","synthetic":false,"types":[]},{"text":"impl Ord for Nonce","synthetic":false,"types":[]},{"text":"impl Ord for Nonce","synthetic":false,"types":[]}];
implementors["syn"] = [{"text":"impl Ord for Lifetime","synthetic":false,"types":[]}];
implementors["time"] = [{"text":"impl Ord for Date","synthetic":false,"types":[]},{"text":"impl Ord for Duration","synthetic":false,"types":[]},{"text":"impl Ord for Format","synthetic":false,"types":[]},{"text":"impl Ord for Instant","synthetic":false,"types":[]},{"text":"impl Ord for OffsetDateTime","synthetic":false,"types":[]},{"text":"impl Ord for PrimitiveDateTime","synthetic":false,"types":[]},{"text":"impl Ord for Time","synthetic":false,"types":[]},{"text":"impl Ord for UtcOffset","synthetic":false,"types":[]}];
implementors["tinyvec"] = [{"text":"impl&lt;A:&nbsp;Array&gt; Ord for ArrayVec&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::Item: Ord,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'s, T&gt; Ord for SliceVec&lt;'s, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Ord,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;A:&nbsp;Array&gt; Ord for TinyVec&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::Item: Ord,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["tokio"] = [{"text":"impl Ord for Instant","synthetic":false,"types":[]}];
implementors["tokio_util"] = [{"text":"impl Ord for BytesCodec","synthetic":false,"types":[]},{"text":"impl Ord for LinesCodec","synthetic":false,"types":[]}];
implementors["tracing_core"] = [{"text":"impl Ord for Level","synthetic":false,"types":[]},{"text":"impl Ord for LevelFilter","synthetic":false,"types":[]}];
implementors["unicase"] = [{"text":"impl&lt;T:&nbsp;AsRef&lt;str&gt;&gt; Ord for Ascii&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;AsRef&lt;str&gt;&gt; Ord for UniCase&lt;T&gt;","synthetic":false,"types":[]}];
implementors["unicode_bidi"] = [{"text":"impl Ord for Level","synthetic":false,"types":[]}];
implementors["url"] = [{"text":"impl&lt;S:&nbsp;Ord&gt; Ord for Host&lt;S&gt;","synthetic":false,"types":[]},{"text":"impl Ord for Url","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()