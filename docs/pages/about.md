---
layout: page
title: About
permalink: /about/
weight: 3
---

# **About Me**

**{{ site.author.name }}** :wave:,<br>
사진과 운동, 영화를 좋아하는 개발자입니다 😎

<div class="row">
{% include about/skills.html title="Programming Skills" source=site.data.programming-skills %}
{% include about/skills.html title="Other Skills" source=site.data.other-skills %}
</div>

<div class="row">
{% include about/timeline.html %}
</div>
